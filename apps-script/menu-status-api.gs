const SPREADSHEET_ID = "1mCE2YF_yZA7h882-pVdBjUC2x1_NJt7wslPT2a_UXZ8";
const SHEET_NAME = "menu_status";
const ADMIN_TOKEN = "change-this-token";

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const action = params.action || "status";

  try {
    if (action === "status") {
      return jsonp_(params.callback, getStatus_());
    }

    if (action === "save") {
      if (params.token !== ADMIN_TOKEN) {
        throw new Error("Invalid admin token.");
      }
      const ids = (params.ids || "")
        .split(",")
        .map(function (id) {
          return id.trim();
        })
        .filter(Boolean);
      return jsonp_(params.callback, saveStatus_(ids));
    }

    throw new Error("Unknown action.");
  } catch (error) {
    return jsonp_(params.callback, {
      ok: false,
      error: error.message || String(error),
    });
  }
}

function getStatus_() {
  const sheet = getSheet_();
  const rows = readRows_(sheet);
  const soldOutIds = rows
    .filter(function (row) {
      return row.soldOut;
    })
    .map(function (row) {
      return row.id;
    });

  return {
    ok: true,
    soldOutIds: soldOutIds,
    rows: rows,
    updatedAt: new Date().toISOString(),
  };
}

function saveStatus_(soldOutIds) {
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);

  try {
    const sheet = getSheet_();
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) {
      return {
        ok: true,
        soldOutIds: [],
        updatedAt: new Date().toISOString(),
      };
    }

    const soldOutSet = new Set(soldOutIds);
    const range = sheet.getRange(2, 1, lastRow - 1, 6);
    const values = range.getValues();
    const now = new Date();
    const nextStatusValues = values.map(function (row) {
      const id = String(row[0] || "").trim();
      const previousSoldOut = row[4] === true || String(row[4]).toUpperCase() === "TRUE";
      const nextSoldOut = soldOutSet.has(id);
      const previousUpdatedAt = row[5] || "";
      return [nextSoldOut, previousSoldOut === nextSoldOut ? previousUpdatedAt : now];
    });

    sheet.getRange(2, 5, nextStatusValues.length, 2).setValues(nextStatusValues);

    return {
      ok: true,
      soldOutIds: soldOutIds,
      updatedAt: now.toISOString(),
    };
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error("Sheet not found: " + SHEET_NAME);
  }
  return sheet;
}

function readRows_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  return sheet
    .getRange(2, 1, lastRow - 1, 6)
    .getValues()
    .filter(function (row) {
      return row[0];
    })
    .map(function (row) {
      return {
        id: String(row[0]),
        name: String(row[1] || ""),
        category: String(row[2] || ""),
        subCategory: String(row[3] || ""),
        soldOut: row[4] === true || String(row[4]).toUpperCase() === "TRUE",
        updatedAt: row[5] instanceof Date ? row[5].toISOString() : String(row[5] || ""),
      };
    });
}

function jsonp_(callback, payload) {
  const safeCallback = /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback || "") ? callback : "callback";
  return ContentService.createTextOutput(safeCallback + "(" + JSON.stringify(payload) + ");").setMimeType(
    ContentService.MimeType.JAVASCRIPT,
  );
}
