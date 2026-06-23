const seats = [
  { name: "4층 SKY뷰석", color: "#b8b8b8", icon: "https://www.figma.com/api/mcp/asset/ae83b9b4-eebc-4af8-b12a-4f4f26b77730" },
  { name: "1루 내야 필드석", color: "#ef4f4f", icon: "https://www.figma.com/api/mcp/asset/06441d6c-038a-4e53-bd98-34766cbe0d45" },
  { name: "3루 내야 필드석", color: "#ef4f4f", icon: "https://www.figma.com/api/mcp/asset/06441d6c-038a-4e53-bd98-34766cbe0d45" },
  { name: "1루 외야 필드석", color: "#f1863a", icon: "https://www.figma.com/api/mcp/asset/f2d07239-5c1c-4ecd-8bf8-926e82e53a60" },
  { name: "3루 외야 필드석", color: "#f1863a", icon: "https://www.figma.com/api/mcp/asset/f2d07239-5c1c-4ecd-8bf8-926e82e53a60" },
  { name: "SKY 탁자석", color: "#a674d6", icon: "https://www.figma.com/api/mcp/asset/acff5b9e-c9d0-4cbd-8875-3a12fdd90d80" },
  { name: "미니스카이박스", color: "#7a56c6", icon: "https://www.figma.com/api/mcp/asset/a9348a3d-e462-4480-a140-0fc2473513e1" },
  { name: "외야패밀리존", color: "#56a5dc", icon: "https://www.figma.com/api/mcp/asset/f6c409b9-89e1-4f08-a4de-7a88d01e0ca8" },
  { name: "1루 이마트 프렌들리존", color: "#ffd23f", icon: "https://www.figma.com/api/mcp/asset/83d33da2-2fe8-40cd-a470-b3a3690ff055" },
  { name: "3루 이마트 프렌들리존", color: "#ffd23f", icon: "https://www.figma.com/api/mcp/asset/83d33da2-2fe8-40cd-a470-b3a3690ff055" },
  { name: "랜더스 라이브존", color: "#ee6a9b", icon: "https://www.figma.com/api/mcp/asset/88019703-d6b5-48b8-b0da-a3a9c6a639f8" },
  { name: "1층 피코크 테이블석", color: "#1f8f73", icon: "https://www.figma.com/api/mcp/asset/3831e055-e620-429e-b627-64cf45cf42c3" },
  { name: "2층 노브랜드 테이블석", color: "#4ebf67", icon: "https://www.figma.com/api/mcp/asset/5940c4d8-2497-42c3-83c9-4ab603440cac" },
  { name: "1루 덕아웃 상단석", color: "#2f66c9", icon: "https://www.figma.com/api/mcp/asset/9716aaa9-3aef-4222-8f48-75ce931d1894" },
  { name: "3루 덕아웃 상단석", color: "#2f66c9", icon: "https://www.figma.com/api/mcp/asset/9716aaa9-3aef-4222-8f48-75ce931d1894" },
  { name: "몰리스 그린존", color: "#78c850", icon: "https://www.figma.com/api/mcp/asset/57c38165-cbb2-4b4b-9138-90e689250071" },
  { name: "1루 으쓱이존", color: "#f0b43c", icon: "https://www.figma.com/api/mcp/asset/c71e42f3-8dad-4f74-85a5-4fa78eb15252" },
  { name: "3루 원정응원석", color: "#575fcf", icon: "https://www.figma.com/api/mcp/asset/7fd91de5-4d08-463e-b223-036c2bb2dcc8" },
  { name: "1루 홈런커플존", color: "#e6579a", icon: "https://www.figma.com/api/mcp/asset/9737bfee-b8f5-49aa-8c54-44d4e2bc5d37" },
  { name: "3루 홈런커플존", color: "#e6579a", icon: "https://www.figma.com/api/mcp/asset/9737bfee-b8f5-49aa-8c54-44d4e2bc5d37" },
  { name: "스카이박스", color: "#8c8c8c", icon: "https://www.figma.com/api/mcp/asset/20b41aca-c22c-4e82-b4d6-71a402feaf31" },
  { name: "도드람한돈 바비큐존", color: "#8b5a3c", icon: "https://www.figma.com/api/mcp/asset/fd5352af-3fde-4735-992e-97d5538592bf" },
  { name: "이마트 바비큐존", color: "#c97a3a", icon: "https://www.figma.com/api/mcp/asset/e0ca2b9a-6d48-411d-a73f-d298f1877d9b" },
  { name: "1루 요기요 내야패밀리존", color: "#fa743e", icon: "https://www.figma.com/api/mcp/asset/3670dba6-9c9e-46d8-b6f6-93093792f11a" },
  { name: "3루 요기요 내야패밀리존", color: "#fa743e", icon: "https://www.figma.com/api/mcp/asset/3670dba6-9c9e-46d8-b6f6-93093792f11a" },
  { name: "초가정자", color: "#6f9f46", icon: "https://www.figma.com/api/mcp/asset/55ce95f6-399b-46cc-8978-2295b67ffdf0" },
  { name: "로케트배터리 외야파티덱", color: "#45a6a6", icon: "https://www.figma.com/api/mcp/asset/fcdb2fd8-b403-4eae-8f40-5cad9f1476a7" },
];

const menuSubCategories = [
  { id: "ice", label: "ICE" },
  { id: "iceup", label: "ICE 사이즈업" },
  { id: "hot", label: "HOT" },
];

const categories = [
  {
    id: "bingsu",
    label: "빙수",
    items: [
      ["pigbar", "[2~3인] 돼지바빙수", 16000, "진짜 돼지바 하나가 통째로 올라가는 근본 우유빙수", "#f36a73"],
      ["strawberry", "[2~3인] 딸기몽땅빙수", 15000, "상큼한 딸기와 진한 치즈큐브가 올라간 부드러운 우유빙수", "#ff8da1"],
      ["mango", "[2~3인] 망고피치빙수", 15000, "달콤한 망고와 향긋한 복숭아잼이 가득한 우유빙수", "#f7bd45"],
      ["snow", "[2~3인] 눈꽃빙수", 14000, "부드러운 눈꽃우유얼음의 달달고소 기본맛", "#f5f0e8"],
      ["oreo", "[2~3인] 오레오빙수", 10000, "바삭달달 오레오와 부드러운 바닐라 아이스크림이 올라간 얼음빙수", "#3a332f"],
      ["retro", "[2~3인] 레트로빙수", 10000, "후르츠가득한 상큼+달달+고소 조합의 옛날빙수", "#f0a84e"],
      ["cup", "[1인] 컵빙수", 7500, "달달고소한 기본 조합 1인 컵빙수", "#d8c8b3"],
      ["cup-strawberry", "[1인] 딸기컵빙수", 8500, "상큼한 딸기와 진한 치즈큐브가 올라간 1인 컵빙수", "#eb5a70"],
    ],
  },
  {
    id: "coffee",
    label: "커피",
    hasSubCategories: true,
    items: [
      ["americano-ice", "아메리카노", 4000, "깔끔하게 즐기는 시원한 아메리카노", "#6f513d", "ice"],
      ["latte-ice", "카페라떼", 4500, "고소한 우유와 에스프레소의 부드러운 조합", "#b9875f", "ice"],
      ["mocha", "카페모카", 5000, "커피와 초콜릿이 조화로운 달콤한 라떼", "#7c4b37", "ice"],
      ["dolce", "돌체라떼", 5000, "진한 연유의 달콤함이 더해진 라떼", "#c79562", "ice"],
      ["vanilla-ice", "바닐라라떼", 5000, "달콤한 바닐라 향이 더해진 라떼", "#d7b171", "ice"],
      ["caramel", "카라멜마끼아또", 5000, "카라멜 향과 우유가 부드럽게 어우러진 커피", "#c99051", "ice"],
      ["coldbrew", "디카페인 콜드브루", 4500, "부드럽고 깊은 향의 디카페인 콜드브루", "#4d3529", "ice"],
      ["americano-iceup", "아메리카노", 5000, "넉넉한 사이즈로 즐기는 시원한 아메리카노", "#6f513d", "iceup"],
      ["latte-iceup", "카페라떼", 5500, "넉넉한 용량의 부드러운 카페라떼", "#b9875f", "iceup"],
      ["mocha-iceup", "카페모카", 6000, "커피와 초콜릿이 조화로운 달콤한 라떼", "#7c4b37", "iceup"],
      ["dolce-iceup", "돌체라떼", 6000, "진한 연유의 달콤함이 더해진 라떼", "#c79562", "iceup"],
      ["vanilla-iceup", "바닐라라떼", 6000, "달콤한 바닐라라떼를 넉넉한 사이즈로", "#d7b171", "iceup"],
      ["caramel-iceup", "카라멜마끼아또", 6000, "카라멜 향과 우유가 부드럽게 어우러진 커피", "#c99051", "iceup"],
      ["coldbrew-iceup", "디카페인 콜드브루", 5500, "부드럽고 깊은 향의 디카페인 콜드브루", "#4d3529", "iceup"],
      ["americano-hot", "아메리카노", 4000, "따뜻하게 즐기는 진한 아메리카노", "#4d3529", "hot"],
      ["latte-hot", "카페라떼", 4500, "따뜻하고 고소한 우유 라떼", "#b9875f", "hot"],
      ["cappuccino", "카푸치노(Only Hot)", 4500, "풍성한 거품과 에스프레소의 클래식한 조합", "#b9875f", "hot"],
      ["mocha-hot", "카페모카", 5000, "따뜻하게 즐기는 달콤한 카페모카", "#7c4b37", "hot"],
      ["dolce-hot", "돌체라떼", 5000, "진한 연유의 달콤함이 더해진 따뜻한 라떼", "#c79562", "hot"],
      ["vanilla-hot", "바닐라라떼", 5000, "달콤한 바닐라 향이 더해진 따뜻한 라떼", "#d7b171", "hot"],
      ["caramel-hot", "카라멜마끼아또", 5000, "카라멜 향과 우유가 부드럽게 어우러진 커피", "#c99051", "hot"],
      ["coldbrew-hot", "디카페인 콜드브루", 4500, "부드럽고 깊은 향의 디카페인 콜드브루", "#4d3529", "hot"],
    ],
  },
  {
    id: "noncoffee",
    label: "논커피",
    hasSubCategories: true,
    items: [
      ["milk-tea", "밀크티", 5000, "향긋한 홍차와 우유가 부드러운 밀크티", "#b9875f", "ice"],
      ["taro-milk-tea", "타로밀크티", 5000, "고소하고 달콤한 타로 풍미의 밀크티", "#a674d6", "ice"],
      ["green-latte", "녹차라떼", 5000, "쌉싸름한 녹차와 우유가 만난 부드러운 라떼", "#6f9f46", "ice"],
      ["choco", "초코라떼", 5000, "달콤하고 진한 초코 라떼", "#7c4b37", "ice"],
      ["strawberry-latte", "딸기라떼(Only Ice)", 5500, "달콤한 딸기와 우유가 어우러진 라떼", "#ef6f89", "ice"],
      ["peach-iced-tea", "복숭아아이스티", 4000, "산뜻하게 즐기는 복숭아 아이스티", "#f0a84e", "ice"],
      ["lemon-tea", "레몬티", 4000, "상큼한 레몬 향의 티", "#eccd55", "ice"],
      ["grapefruit-tea", "자몽티", 4000, "쌉싸름하고 상큼한 자몽티", "#ef6f89", "ice"],
      ["yuja-tea", "유자차", 4000, "달콤하고 향긋한 유자차", "#f0b43c", "ice"],
      ["chamomile", "캐모마일", 4000, "은은하게 즐기는 캐모마일 티", "#6f9f46", "ice"],
      ["earlgrey", "얼그레이", 4000, "향긋하게 즐기는 얼그레이 티", "#7a56c6", "ice"],
      ["lemon-ade", "레몬에이드", 5000, "상큼한 레몬 향의 에이드", "#eccd55", "ice"],
      ["grapefruit-ade", "자몽에이드", 5000, "쌉싸름하고 상큼한 자몽 에이드", "#ef6f89", "ice"],
      ["green-grape-ade", "청포도에이드", 5000, "청량한 청포도 향의 에이드", "#78c850", "ice"],
      ["blue-lemon-ade", "블루레몬에이드", 5000, "청량한 블루레몬 향의 에이드", "#56a5dc", "ice"],
      ["milk-tea-iceup", "밀크티", 6000, "향긋한 홍차와 우유가 부드러운 밀크티", "#b9875f", "iceup"],
      ["taro-milk-tea-iceup", "타로밀크티", 6000, "고소하고 달콤한 타로 풍미의 밀크티", "#a674d6", "iceup"],
      ["green-latte-iceup", "녹차라떼", 6000, "쌉싸름한 녹차와 우유가 만난 부드러운 라떼", "#6f9f46", "iceup"],
      ["choco-iceup", "초코라떼", 6000, "달콤하고 진한 초코 라떼", "#7c4b37", "iceup"],
      ["strawberry-latte-iceup", "딸기라떼(Only Ice)", 6500, "달콤한 딸기와 우유가 어우러진 라떼", "#ef6f89", "iceup"],
      ["peach-iced-tea-iceup", "복숭아아이스티", 5000, "산뜻하게 즐기는 복숭아 아이스티", "#f0a84e", "iceup"],
      ["lemon-tea-iceup", "레몬티", 5000, "상큼한 레몬 향의 티", "#eccd55", "iceup"],
      ["grapefruit-tea-iceup", "자몽티", 5000, "쌉싸름하고 상큼한 자몽티", "#ef6f89", "iceup"],
      ["yuja-tea-iceup", "유자차", 5000, "달콤하고 향긋한 유자차", "#f0b43c", "iceup"],
      ["chamomile-iceup", "캐모마일", 5000, "은은하게 즐기는 캐모마일 티", "#6f9f46", "iceup"],
      ["earlgrey-iceup", "얼그레이", 5000, "향긋하게 즐기는 얼그레이 티", "#7a56c6", "iceup"],
      ["lemon-ade-iceup", "레몬에이드", 6000, "상큼한 레몬 향의 에이드", "#eccd55", "iceup"],
      ["grapefruit-ade-iceup", "자몽에이드", 6000, "쌉싸름하고 상큼한 자몽 에이드", "#ef6f89", "iceup"],
      ["green-grape-ade-iceup", "청포도에이드", 6000, "청량한 청포도 향의 에이드", "#78c850", "iceup"],
      ["blue-lemon-ade-iceup", "블루레몬에이드", 6000, "청량한 블루레몬 향의 에이드", "#56a5dc", "iceup"],
      ["milk-tea-hot", "밀크티", 5000, "따뜻하게 즐기는 부드러운 밀크티", "#b9875f", "hot"],
      ["taro-milk-tea-hot", "타로밀크티", 5000, "따뜻한 타로 풍미의 밀크티", "#a674d6", "hot"],
      ["green-latte-hot", "녹차라떼", 5000, "따뜻하고 쌉싸름한 녹차라떼", "#6f9f46", "hot"],
      ["choco-hot", "초코라떼", 5000, "따뜻하고 진한 초코라떼", "#7c4b37", "hot"],
      ["lemon-tea-hot", "레몬티", 4000, "따뜻하게 즐기는 상큼한 레몬티", "#eccd55", "hot"],
      ["grapefruit-tea-hot", "자몽티", 4000, "따뜻하게 즐기는 상큼한 자몽티", "#ef6f89", "hot"],
      ["yuja-tea-hot", "유자차", 4000, "따뜻하고 향긋한 유자차", "#f0b43c", "hot"],
      ["chamomile-hot", "캐모마일", 4000, "따뜻하게 즐기는 캐모마일 티", "#6f9f46", "hot"],
      ["earlgrey-hot", "얼그레이", 4000, "따뜻하게 즐기는 얼그레이 티", "#7a56c6", "hot"],
    ],
  },
  {
    id: "alcohol",
    label: "주류",
    items: [
      ["draft-beer", "생맥주", 10000, "시원하게 즐기는 부드러운 생맥주", "#f0b43c"],
      ["can-beer", "캔맥주", 4000, "가볍게 곁들이기 좋은 시원한 캔맥주", "#eccd55"],
      ["extra-cup", "컵추가", 1000, "함께 나눠 마시기 좋은 추가 컵", "#d8c8b3"],
    ],
  },
  {
    id: "etc",
    label: "기타",
    items: [
      ["snap-blanket", "똑딱이담요", 10000, "어깨에 두르기 편한 포근한 똑딱이 담요", "#7a56c6"],
      ["lap-blanket", "무릎담요", 6000, "좌석에서 따뜻하게 덮기 좋은 무릎담요", "#56a5dc"],
      ["hot-pack", "핫팩", 2000, "손에 쥐고 따뜻하게 쓰는 휴대용 핫팩", "#f0b43c"],
      ["warm-set", "아따뜻해세트", 16000, "추운 날 관람을 위한 따뜻한 세트 구성", "#ef6f89"],
    ],
  },
];

const menuImages = {
  pigbar: "./images/menu/커빙_돼지바빙수_정면뷰.png",
  strawberry: "./images/menu/커빙_딸기몽땅빙수_정면뷰.png",
  mango: "./images/menu/커빙_망고피치빙수_정면뷰.png",
  snow: "./images/menu/커빙_눈꽃빙수_정면뷰.png",
  oreo: "./images/menu/커빙_오레오빙수_정면뷰.png",
  retro: "./images/menu/커빙_레트로빙수_정면뷰.png",
  cup: "./images/menu/커빙_컵빙수_정면뷰.png",
  "cup-strawberry": "./images/menu/커빙_딸기컵빙수_정면뷰.png",
  "americano-ice": "./images/menu/아이스아메리카노.png",
  coldbrew: "./images/menu/콜드브루.png",
  "latte-ice": "./images/menu/카페라떼.png",
  "vanilla-ice": "./images/menu/바닐라라떼.png",
  dolce: "./images/menu/돌체라떼.png",
  mocha: "./images/menu/카페모카.png",
  caramel: "./images/menu/카라멜마끼아또.png",
  cappuccino: "./images/menu/카푸치노.png",
  "americano-iceup": "./images/menu/아이스아메리카노.png",
  "latte-iceup": "./images/menu/카페라떼.png",
  "vanilla-iceup": "./images/menu/바닐라라떼.png",
  "americano-hot": "./images/menu/아메리카노_핫.png",
  "latte-hot": "./images/menu/카페라떼_핫.png",
  "green-latte": "./images/menu/녹차라떼.png",
  "green-latte-iceup": "./images/menu/녹차라떼.png",
  "green-latte-hot": "./images/menu/녹차라떼_핫.png",
  sweetpotato: "./images/menu/고구마라떼.png",
  "sweetpotato-hot": "./images/menu/고구마라떼_핫.png",
  "strawberry-latte": "./images/menu/딸기라떼.png",
  "milk-tea": "./images/menu/밀크티.png",
  "milk-tea-iceup": "./images/menu/밀크티.png",
  "taro-milk-tea": "./images/menu/타로밀크티.png",
  choco: "./images/menu/초코라떼.png",
  "choco-iceup": "./images/menu/초코라떼.png",
  "choco-hot": "./images/menu/초코라떼.png",
  chamomile: "./images/menu/캐모마일.png",
  earlgrey: "./images/menu/얼그레이티.png",
  "lemon-tea": "./images/menu/레몬티.png",
  "grapefruit-tea": "./images/menu/자몽티.png",
  "yuja-tea": "./images/menu/유자차.png",
  "peach-iced-tea": "./images/menu/복숭아아이스티.png",
  "lemon-ade": "./images/menu/레몬에이드.png",
  "grapefruit-ade": "./images/menu/자몽에이드.png",
  "green-grape-ade": "./images/menu/청포도에이드.png",
  "blue-lemon-ade": "./images/menu/블루레몬에이드.png",
  "draft-beer": "./images/menu/생맥주.png",
  "can-beer": "./images/menu/캔맥주.png",
  "extra-cup": "./images/menu/컵추가.png",
  "snap-blanket": "./images/menu/똑딱이담요.png",
  "lap-blanket": "./images/menu/무릎담요.png",
  "hot-pack": "./images/menu/핫팩.png",
  "warm-set": "./images/menu/아따뜻해세트.png",
};
Object.assign(menuImages, {
  "mocha-iceup": menuImages.mocha,
  "dolce-iceup": menuImages.dolce,
  "caramel-iceup": menuImages.caramel,
  "coldbrew-iceup": menuImages.coldbrew,
  "mocha-hot": "./images/menu/카페모카_핫.png",
  "dolce-hot": "./images/menu/돌체라떼_핫.png",
  "vanilla-hot": "./images/menu/바닐라라떼_핫.png",
  "caramel-hot": "./images/menu/카라멜마끼아또_핫.png",
  "coldbrew-hot": "./images/menu/디카페인콜드브루_핫.png",
  "milk-tea-hot": "./images/menu/밀크티_핫.png",
  "taro-milk-tea-iceup": menuImages["taro-milk-tea"],
  "taro-milk-tea-hot": "./images/menu/타로밀크티_핫.png",
  "strawberry-latte-iceup": menuImages["strawberry-latte"],
  "peach-iced-tea-iceup": menuImages["peach-iced-tea"],
  "lemon-tea-iceup": menuImages["lemon-tea"],
  "lemon-tea-hot": "./images/menu/레몬티_핫.png",
  "grapefruit-tea-iceup": menuImages["grapefruit-tea"],
  "grapefruit-tea-hot": "./images/menu/자몽티_핫.png",
  "yuja-tea-iceup": menuImages["yuja-tea"],
  "yuja-tea-hot": "./images/menu/유자차_핫.png",
  "chamomile-iceup": menuImages.chamomile,
  "chamomile-hot": "./images/menu/캐모마일_핫.png",
  "earlgrey-iceup": menuImages.earlgrey,
  "earlgrey-hot": "./images/menu/얼그레이_핫.png",
  "lemon-ade-iceup": menuImages["lemon-ade"],
  "grapefruit-ade-iceup": menuImages["grapefruit-ade"],
  "green-grape-ade-iceup": menuImages["green-grape-ade"],
  "blue-lemon-ade-iceup": menuImages["blue-lemon-ade"],
});

const allMenusSoldOut = false;
const soldOutMenuIds = new Set([]);

const menuItems = categories.flatMap((category) =>
  category.items.map(([id, name, price, desc, color, subCategory, soldOut]) => ({
    id,
    name,
    price,
    desc,
    color,
    category: category.id,
    subCategory,
    soldOut: allMenusSoldOut || soldOutMenuIds.has(id) || Boolean(soldOut),
    image: menuImages[id],
  })),
);

const state = {
  screen: "home",
  category: categories[0].id,
  menuSubCategory: menuSubCategories[0].id,
  seatName: "",
  seatDetailsOpen: false,
  seatPickerExpanded: false,
  quantities: Object.fromEntries(menuItems.map((item) => [item.id, 0])),
};

const screens = document.querySelectorAll(".screen");
const stepLabel = document.querySelector("#stepLabel");
const backButton = document.querySelector("#backButton");
const bottomBar = document.querySelector("#bottomBar");
const seatScreen = document.querySelector('[data-screen="seat"]');
const stadiumMap = document.querySelector(".stadium-map");
const stadiumMagnifier = document.querySelector("#stadiumMagnifier");
const seatPickerShell = document.querySelector("#seatPickerShell");
const seatPickerHandle = document.querySelector("#seatPickerHandle");
const seatType = document.querySelector("#seatType");
const seatBlock = document.querySelector("#seatBlock");
const seatRow = document.querySelector("#seatRow");
const seatNumber = document.querySelector("#seatNumber");
const seatDescription = document.querySelector("#seatDescription");
const seatDetail = document.querySelector("#seatDetail");
const selectedSeatName = document.querySelector("#selectedSeatName");
const confirmSeatZone = document.querySelector("#confirmSeatZone");
const confirmSeatTags = document.querySelector(".seat-confirm-tags");
const confirmSeatBlock = document.querySelector("#confirmSeatBlock");
const confirmSeatRow = document.querySelector("#confirmSeatRow");
const confirmSeatNumber = document.querySelector("#confirmSeatNumber");
const confirmSeatDescription = document.querySelector("#confirmSeatDescription");
const seatConfirmYes = document.querySelector("#seatConfirmYes");
const seatConfirmRetry = document.querySelector("#seatConfirmRetry");
const totalPrice = document.querySelector("#totalPrice");
const categoryTabs = document.querySelector("#categoryTabs");
const menuSubTabs = document.querySelector("#menuSubTabs");
const menuList = document.querySelector("#menuList");
const reviewButton = document.querySelector("#reviewButton");
const orderButton = document.querySelector("#orderButton");
const cartSummary = document.querySelector("#cartSummary");
const cartTotalCount = document.querySelector("#cartTotalCount");
const seatSummary = document.querySelector("#seatSummary");
const orderSummary = document.querySelector("#orderSummary");
const requestMemo = document.querySelector("#requestMemo");
const smsPhone = document.querySelector("#smsPhone");
const messagePreview = document.querySelector("#messagePreview");
const requestCompleteButton = document.querySelector("#requestCompleteButton");
const reviewBackToCart = document.querySelector("#reviewBackToCart");
const finalMessagePreview = document.querySelector("#finalMessagePreview");
const placeOrderButton = document.querySelector("#placeOrderButton");
const placeRestartButton = document.querySelector("#placeRestartButton");
const toast = document.querySelector("#toast");
const mainVisual = document.querySelector(".main-visual");
const slides = [...document.querySelectorAll(".slide")];
let activeSlide = 0;
let heroSliderTimer = 0;
let heroDragStartX = 0;
let heroDragCurrentX = 0;
let heroIsDragging = false;
let seatPickerDragStartY = 0;
let seatPickerWasDragged = false;
let seatPickerMouseDragging = false;
let categoryTabsDragStartX = 0;
let categoryTabsDragStartScroll = 0;
let categoryTabsIsDragging = false;
let categoryTabsSuppressClick = false;

const labels = {
  home: "주문 시작",
  seat: "좌석 입력",
  seatConfirm: "좌석 확인",
  menu: "메뉴 선택",
  cart: "장바구니",
  review: "주문 확인",
  placeOrder: "주문하기",
};

const orderSmsRecipient = "01024374223";

function formatPrice(value) {
  return `${value.toLocaleString("ko-KR")}원`;
}

function selectedItems() {
  return menuItems
    .map((item) => ({ ...item, quantity: state.quantities[item.id] }))
    .filter((item) => item.quantity > 0 && !item.soldOut);
}

function total() {
  return selectedItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function totalQuantity() {
  return selectedItems().reduce((sum, item) => sum + item.quantity, 0);
}

function getOrderItemLabel(item) {
  if ((item.category === "coffee" || item.category === "noncoffee") && item.subCategory) {
    const label = menuSubCategories.find((category) => category.id === item.subCategory)?.label || "";
    return `[${label}] ${item.name}`;
  }
  return item.name;
}

function stripBracketText(text) {
  return text
    .replace(/\s*\[[^\]]*\]\s*/g, " ")
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/\s*（[^）]*）\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getMessageItemLabel(item) {
  const name = stripBracketText(item.name);
  if ((item.category === "coffee" || item.category === "noncoffee") && item.subCategory) {
    const optionLabels = {
      ice: "아이스",
      iceup: "아이스 사이즈업",
      hot: "핫",
    };
    return `${name} ${optionLabels[item.subCategory] || ""}`.trim();
  }
  return name;
}

function getSeatText() {
  const description = seatDescription.value.trim();
  const parts = [
    state.seatName || "좌석 구역 미선택",
    seatBlock.value.trim() && `${seatBlock.value.trim()} 블럭`,
    seatRow.value.trim() && `${seatRow.value.trim()} 열`,
    seatNumber.value.trim() && `${seatNumber.value.trim()}번 좌석`,
    description && `설명: ${description}`,
  ].filter(Boolean);
  return parts.join(" / ");
}

function buildMessage() {
  const itemLines = selectedItems().map(
    (item) => `- ${getMessageItemLabel(item)} ${item.quantity}개`,
  );
  const memo = requestMemo.value.trim();
  const lines = [
    "커빙 배달 주문합니다~",
    "",
    `좌석 : ${getSeatText()}`,
    "",
    "주문내역 :",
    ...itemLines,
  ];

  if (memo) {
    lines.push("", "요청사항 :", memo);
  }

  lines.push("", `예상결제금액 : ${formatPrice(total())}`);

  return lines.join("\n");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function startHeroSlider() {
  if (slides.length < 2) {
    return;
  }

  updateHeroSlides();
  startHeroAutoplay();
}

function updateHeroSlides(offset = 0) {
  const offsetPercent = mainVisual.offsetWidth ? (offset / mainVisual.offsetWidth) * 100 : 0;
  slides.forEach((slide, index) => {
    let distance = index - activeSlide;
    if (distance > slides.length / 2) distance -= slides.length;
    if (distance < -slides.length / 2) distance += slides.length;
    slide.classList.toggle("is-active", index === activeSlide);
    slide.setAttribute("aria-hidden", index === activeSlide ? "false" : "true");
    slide.style.transform = `translateX(${distance * 100 + offsetPercent}%)`;
  });
}

function showHeroSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  updateHeroSlides();
}

function startHeroAutoplay() {
  window.clearInterval(heroSliderTimer);
  heroSliderTimer = window.setInterval(() => {
    showHeroSlide(activeSlide + 1);
  }, 3200);
}

function stopHeroAutoplay() {
  window.clearInterval(heroSliderTimer);
  heroSliderTimer = 0;
}

function finishHeroSwipe() {
  if (!heroIsDragging) {
    return;
  }

  const dragDistance = heroDragCurrentX - heroDragStartX;
  const threshold = Math.min(80, mainVisual.offsetWidth * 0.18);
  mainVisual.classList.remove("is-dragging");
  heroIsDragging = false;

  if (Math.abs(dragDistance) > threshold) {
    showHeroSlide(activeSlide + (dragDistance < 0 ? 1 : -1));
  } else {
    updateHeroSlides();
  }

  startHeroAutoplay();
}

function goTo(screen) {
  state.screen = screen;
  document.body.classList.toggle("is-seat-screen", screen === "seat");
  document.body.classList.toggle("is-menu-screen", screen === "menu");
  document.querySelector(".app-shell").classList.toggle("is-home", screen === "home");
  document.querySelector(".app-shell").classList.toggle("is-seat-screen", screen === "seat");
  document.querySelector(".app-shell").classList.toggle("is-menu-screen", screen === "menu");
  document.querySelector(".app-shell").classList.toggle("is-cart-screen", screen === "cart");
  screens.forEach((element) => {
    element.classList.toggle("is-active", element.dataset.screen === screen);
  });
  stepLabel.textContent = labels[screen];
  backButton.disabled = screen === "home";
  bottomBar.hidden =
    screen === "home" || screen === "seat" || screen === "seatConfirm" || screen === "review" || screen === "placeOrder";
  reviewButton.textContent = screen === "cart" ? "더 고르기" : "장바구니";
  orderButton.textContent = "주문하기";
  updateBottom();
  if (screen === "cart") {
    updateCart();
  }
  if (screen === "review") {
    updateReview();
  }
  if (screen === "placeOrder") {
    updatePlaceOrder();
  }
  if (screen === "seatConfirm") {
    updateSeatConfirm();
  }
  window.scrollTo({ top: 0, behavior: screen === "seat" || screen === "menu" ? "auto" : "smooth" });
}

function updateBottom() {
  const hasItems = selectedItems().length > 0;
  totalPrice.textContent = formatPrice(total());
  reviewButton.disabled = !hasItems;
  orderButton.disabled = !hasItems;
}

function updateSeatDetail() {
  seatDetail.hidden = !state.seatDetailsOpen;
  seatScreen.classList.toggle("has-seat-detail", state.seatDetailsOpen);
  seatScreen.classList.toggle("is-picker-expanded", state.seatDetailsOpen && state.seatPickerExpanded);
  seatPickerHandle.setAttribute(
    "aria-label",
    state.seatDetailsOpen && state.seatPickerExpanded ? "좌석 구역 목록 접기" : "좌석 구역 목록 열기",
  );
  seatPickerHandle.setAttribute("aria-expanded", state.seatDetailsOpen && state.seatPickerExpanded ? "true" : "false");
  const selectedSeat = seats.find((seat) => seat.name === state.seatName);
  selectedSeatName.innerHTML = selectedSeat
    ? `<span class="seat-dot" style="--seat-color: ${selectedSeat.color}"><img class="seat-dot-img" src="${selectedSeat.icon}" alt="" /></span><span>${selectedSeat.name}</span>`
    : "";
}

function updateSeatConfirm() {
  const selectedSeat = seats.find((seat) => seat.name === state.seatName);
  const block = seatBlock.value.trim();
  const row = seatRow.value.trim();
  const number = seatNumber.value.trim();
  const description = seatDescription.value.trim();
  confirmSeatZone.innerHTML = selectedSeat
    ? `<span class="seat-dot" style="--seat-color: ${selectedSeat.color}"><img class="seat-dot-img" src="${selectedSeat.icon}" alt="" /></span><span>${selectedSeat.name}</span>`
    : "";
  confirmSeatTags.hidden = !(block || row || number);
  confirmSeatBlock.hidden = !block;
  confirmSeatBlock.textContent = block ? `${block} 블럭` : "";
  confirmSeatRow.hidden = !row;
  confirmSeatRow.textContent = row ? `${row} 열` : "";
  confirmSeatNumber.hidden = !number;
  confirmSeatNumber.textContent = number ? `${number}번 좌석` : "";
  confirmSeatDescription.hidden = !description;
  confirmSeatDescription.textContent = description ? `설명: ${description}` : "";
}

function scrollSeatInputIntoView(input) {
  if (state.screen !== "seat" || !state.seatDetailsOpen) {
    return;
  }

  const target = input.closest("label") || input;
  const scrollToTarget = () => {
    const containerRect = seatDetail.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const nextTop = seatDetail.scrollTop + targetRect.top - containerRect.top - 8;
    seatDetail.scrollTo({
      top: Math.max(0, nextTop),
      behavior: "smooth",
    });
  };

  window.requestAnimationFrame(scrollToTarget);
  window.setTimeout(scrollToTarget, 280);
}

function setSeatPickerExpanded(expanded) {
  state.seatPickerExpanded = Boolean(expanded);
  updateSeatDetail();
}

function handleSeatPickerDrag(currentY) {
  const dragDistance = currentY - seatPickerDragStartY;
  if (Math.abs(dragDistance) < 24) {
    return;
  }
  seatPickerWasDragged = true;
  setSeatPickerExpanded(dragDistance < 0);
}

function updateCart() {
  const items = selectedItems();
  cartSummary.innerHTML = items
    .map(
      (item, index) => `
        <div class="cart-row ${index === items.length - 1 ? "is-last" : ""}">
          <div class="cart-row-copy">
            <p>${getOrderItemLabel(item)}</p>
            <span>${formatPrice(item.price * item.quantity)}</span>
          </div>
          <div class="cart-quantity" aria-label="${item.name} 수량">
            <button type="button" data-dec="${item.id}" aria-label="${item.name} 빼기">-</button>
            <output>${item.quantity}</output>
            <button type="button" data-inc="${item.id}" aria-label="${item.name} 더하기">+</button>
          </div>
        </div>
      `,
    )
    .join("");
  cartTotalCount.textContent = totalQuantity();
}

function updateReview() {
  seatSummary.textContent = getSeatText();
  const items = selectedItems();
  orderSummary.innerHTML = items
    .map(
      (item, index) => `
        <div class="review-order-row ${index === items.length - 1 ? "is-last" : ""}">
          <span>${getOrderItemLabel(item)}</span>
          <strong>${item.quantity} 개</strong>
        </div>
      `,
    )
    .join("");
  messagePreview.value = buildMessage();
}

function updatePlaceOrder() {
  finalMessagePreview.value = buildMessage();
  messagePreview.value = finalMessagePreview.value;
}

function renderSeatOptions() {
  seatType.innerHTML = seats
    .map(
      (seat) => `
        <button
          class="seat-option ${state.seatName && seat.name === state.seatName ? "is-selected" : ""}"
          type="button"
          role="option"
          aria-selected="${state.seatName && seat.name === state.seatName ? "true" : "false"}"
          data-seat="${seat.name}"
        >
          <span class="seat-dot" style="--seat-color: ${seat.color}">
            <img class="seat-dot-img" src="${seat.icon}" alt="" />
          </span>
          <span>${seat.name}</span>
        </button>
      `,
    )
    .join("");
  updateSeatDetail();
}

function renderTabs() {
  categoryTabs.innerHTML = categories
    .map(
      (category) =>
        `<button class="tab-button ${category.id === state.category ? "is-active" : ""}" type="button" role="tab" data-category="${category.id}">${category.label}</button>`,
    )
    .join("");
}

function currentCategory() {
  return categories.find((category) => category.id === state.category);
}

function renderSubTabs() {
  const category = currentCategory();
  menuSubTabs.hidden = !category?.hasSubCategories;
  if (menuSubTabs.hidden) {
    menuSubTabs.innerHTML = "";
    return;
  }
  menuSubTabs.innerHTML = menuSubCategories
    .map(
      (subCategory) =>
        `<button class="subtab-button ${subCategory.id === state.menuSubCategory ? "is-active" : ""}" type="button" role="tab" data-menu-sub-category="${subCategory.id}">${subCategory.label}</button>`,
    )
    .join("");
}

function renderMenu() {
  const category = currentCategory();
  const items = menuItems.filter(
    (item) => item.category === state.category && (!category?.hasSubCategories || item.subCategory === state.menuSubCategory),
  );
  menuList.innerHTML = items
    .map(
      (item) => `
        <article class="menu-item ${item.soldOut ? "is-sold-out" : ""}">
          <div class="menu-thumb" style="--thumb: ${item.color}">
            ${
              item.image
                ? `<img src="${item.image}" alt="${item.name}" loading="lazy" />`
                : ""
            }
            ${item.soldOut ? `<span class="sold-out-badge">품절</span>` : ""}
          </div>
          <div class="menu-copy">
            <div class="menu-head">
              <span>${item.name}</span>
              <span>${(item.price / 1000).toFixed(1)}</span>
            </div>
            <p class="menu-desc">${item.desc}</p>
            <div class="quantity ${item.soldOut ? "is-disabled" : ""}" aria-label="${item.name} 수량">
              <button type="button" data-dec="${item.id}" aria-label="${item.name} 빼기" ${item.soldOut ? "disabled" : ""}>-</button>
              <output>${state.quantities[item.id]}</output>
              <button type="button" data-inc="${item.id}" aria-label="${item.name} 더하기" ${item.soldOut ? "disabled" : ""}>+</button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function resetMenuListScroll() {
  menuList.scrollTo({ top: 0, behavior: "auto" });
}

function scrollActiveCategoryIntoView() {
  const activeTab = categoryTabs.querySelector(".tab-button.is-active");
  activeTab?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

function copyMessage() {
  const text = buildMessage();
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  messagePreview.focus();
  messagePreview.select();
  document.execCommand("copy");
  return Promise.resolve();
}

function openSms() {
  const separator = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? "&" : "?";
  const recipient = encodeURIComponent(orderSmsRecipient);
  const body = encodeURIComponent(buildMessage());
  window.location.href = `sms:${recipient}${separator}body=${body}`;
}

function hideStadiumMagnifier() {
  stadiumMap.classList.remove("is-magnifying");
}

function updateStadiumMagnifier(event) {
  if (state.screen !== "seat") {
    hideStadiumMagnifier();
    return;
  }

  const rect = stadiumMap.getBoundingClientRect();
  const lensSize = stadiumMagnifier.offsetWidth || 132;
  const zoom = 2.35;
  const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
  const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
  const lensLeft = Math.min(Math.max(x - lensSize / 2, 8), rect.width - lensSize - 8);
  const lensTop = Math.min(Math.max(y - lensSize / 2, 8), rect.height - lensSize - 8);
  const backgroundWidth = rect.width * zoom;
  const backgroundHeight = rect.height * zoom;
  const backgroundX = Math.min(Math.max(x * zoom - lensSize / 2, 0), backgroundWidth - lensSize);
  const backgroundY = Math.min(Math.max(y * zoom - lensSize / 2, 0), backgroundHeight - lensSize);

  stadiumMagnifier.style.left = `${lensLeft}px`;
  stadiumMagnifier.style.top = `${lensTop}px`;
  stadiumMagnifier.style.backgroundSize = `${backgroundWidth}px ${backgroundHeight}px`;
  stadiumMagnifier.style.backgroundPosition = `-${backgroundX}px -${backgroundY}px`;
  stadiumMap.classList.add("is-magnifying");
}

document.querySelector("[data-start-order]").addEventListener("click", () => goTo("seat"));

document.querySelector("#seatNext").addEventListener("click", () => {
  if (!state.seatName) {
    showToast("좌석 구역을 선택해주세요.");
    return;
  }
  goTo("seatConfirm");
});

seatConfirmYes.addEventListener("click", () => goTo("menu"));

seatConfirmRetry.addEventListener("click", () => goTo("seat"));

seatPickerHandle.addEventListener("pointerdown", (event) => {
  seatPickerDragStartY = event.clientY;
  seatPickerWasDragged = false;
  seatPickerHandle.setPointerCapture(event.pointerId);
});

seatPickerHandle.addEventListener("pointermove", (event) => {
  if (!seatPickerHandle.hasPointerCapture(event.pointerId)) {
    return;
  }
  handleSeatPickerDrag(event.clientY);
});

seatPickerHandle.addEventListener("pointerup", (event) => {
  if (seatPickerHandle.hasPointerCapture(event.pointerId)) {
    seatPickerHandle.releasePointerCapture(event.pointerId);
  }
});

seatPickerHandle.addEventListener("pointercancel", (event) => {
  if (seatPickerHandle.hasPointerCapture(event.pointerId)) {
    seatPickerHandle.releasePointerCapture(event.pointerId);
  }
});

seatPickerHandle.addEventListener("click", () => {
  if (seatPickerWasDragged) {
    seatPickerWasDragged = false;
    return;
  }
  setSeatPickerExpanded(!state.seatPickerExpanded);
});

seatPickerHandle.addEventListener("mousedown", (event) => {
  seatPickerMouseDragging = true;
  seatPickerDragStartY = event.clientY;
  seatPickerWasDragged = false;
});

window.addEventListener("mousemove", (event) => {
  if (!seatPickerMouseDragging) {
    return;
  }
  handleSeatPickerDrag(event.clientY);
});

window.addEventListener("mouseup", () => {
  seatPickerMouseDragging = false;
});

seatPickerHandle.addEventListener(
  "touchstart",
  (event) => {
    seatPickerDragStartY = event.touches[0].clientY;
    seatPickerWasDragged = false;
  },
  { passive: true },
);

seatPickerHandle.addEventListener(
  "touchmove",
  (event) => {
    handleSeatPickerDrag(event.touches[0].clientY);
  },
  { passive: true },
);

categoryTabs.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  categoryTabsIsDragging = true;
  categoryTabsSuppressClick = false;
  categoryTabsDragStartX = event.clientX;
  categoryTabsDragStartScroll = categoryTabs.scrollLeft;
  categoryTabs.classList.add("is-dragging");
  categoryTabs.setPointerCapture(event.pointerId);
});

categoryTabs.addEventListener("pointermove", (event) => {
  if (!categoryTabsIsDragging) return;
  const deltaX = event.clientX - categoryTabsDragStartX;
  if (Math.abs(deltaX) > 4) {
    categoryTabsSuppressClick = true;
  }
  categoryTabs.scrollLeft = categoryTabsDragStartScroll - deltaX;
});

categoryTabs.addEventListener("pointerup", (event) => {
  categoryTabsIsDragging = false;
  categoryTabs.classList.remove("is-dragging");
  if (categoryTabs.hasPointerCapture(event.pointerId)) {
    categoryTabs.releasePointerCapture(event.pointerId);
  }
});

categoryTabs.addEventListener("pointercancel", (event) => {
  categoryTabsIsDragging = false;
  categoryTabs.classList.remove("is-dragging");
  if (categoryTabs.hasPointerCapture(event.pointerId)) {
    categoryTabs.releasePointerCapture(event.pointerId);
  }
});

categoryTabs.addEventListener(
  "click",
  (event) => {
    if (!categoryTabsSuppressClick) return;
    event.preventDefault();
    event.stopPropagation();
    categoryTabsSuppressClick = false;
  },
  true,
);

mainVisual.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) {
    return;
  }
  stopHeroAutoplay();
  heroIsDragging = true;
  heroDragStartX = event.clientX;
  heroDragCurrentX = event.clientX;
  mainVisual.classList.add("is-dragging");
  mainVisual.setPointerCapture(event.pointerId);
});

mainVisual.addEventListener("pointermove", (event) => {
  if (!heroIsDragging) {
    return;
  }
  heroDragCurrentX = event.clientX;
  updateHeroSlides(heroDragCurrentX - heroDragStartX);
});

mainVisual.addEventListener("pointerup", (event) => {
  if (mainVisual.hasPointerCapture(event.pointerId)) {
    mainVisual.releasePointerCapture(event.pointerId);
  }
  finishHeroSwipe();
});

mainVisual.addEventListener("pointercancel", (event) => {
  if (mainVisual.hasPointerCapture(event.pointerId)) {
    mainVisual.releasePointerCapture(event.pointerId);
  }
  finishHeroSwipe();
});

mainVisual.addEventListener("pointerleave", () => {
  if (heroIsDragging) {
    finishHeroSwipe();
  }
});

stadiumMap.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "mouse") {
    updateStadiumMagnifier(event);
  }
});

stadiumMap.addEventListener("pointerdown", (event) => {
  updateStadiumMagnifier(event);
  stadiumMap.setPointerCapture(event.pointerId);
});

stadiumMap.addEventListener("pointermove", updateStadiumMagnifier);

stadiumMap.addEventListener("pointerleave", hideStadiumMagnifier);

stadiumMap.addEventListener("pointerup", (event) => {
  if (stadiumMap.hasPointerCapture(event.pointerId)) {
    stadiumMap.releasePointerCapture(event.pointerId);
  }
  hideStadiumMagnifier();
});

stadiumMap.addEventListener("pointercancel", (event) => {
  if (stadiumMap.hasPointerCapture(event.pointerId)) {
    stadiumMap.releasePointerCapture(event.pointerId);
  }
  hideStadiumMagnifier();
});

seatType.addEventListener("click", (event) => {
  const button = event.target.closest("[data-seat]");
  if (!button) return;
  const previousSeat = state.seatName;
  state.seatName = button.dataset.seat;
  state.seatDetailsOpen = true;
  state.seatPickerExpanded = false;
  if (previousSeat !== state.seatName) {
    seatBlock.value = "";
    seatRow.value = "";
    seatNumber.value = "";
    seatDescription.value = "";
  }
  renderSeatOptions();
  if (state.screen === "review") {
    updateReview();
  }
  if (state.screen === "placeOrder") {
    updatePlaceOrder();
  }
});

backButton.addEventListener("click", () => {
  if (state.screen === "seat") goTo("home");
  if (state.screen === "seatConfirm") goTo("seat");
  if (state.screen === "menu") goTo("seat");
  if (state.screen === "cart") goTo("menu");
  if (state.screen === "review") goTo("cart");
  if (state.screen === "placeOrder") goTo("review");
});

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.menuSubCategory = menuSubCategories[0].id;
  renderTabs();
  renderSubTabs();
  renderMenu();
  resetMenuListScroll();
  scrollActiveCategoryIntoView();
});

menuSubTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-menu-sub-category]");
  if (!button) return;
  state.menuSubCategory = button.dataset.menuSubCategory;
  renderSubTabs();
  renderMenu();
  resetMenuListScroll();
});

menuList.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");
  if (inc) {
    const item = menuItems.find((menuItem) => menuItem.id === inc.dataset.inc);
    if (item?.soldOut) return;
    state.quantities[inc.dataset.inc] += 1;
  }
  if (dec) {
    const id = dec.dataset.dec;
    const item = menuItems.find((menuItem) => menuItem.id === id);
    if (item?.soldOut) return;
    state.quantities[id] = Math.max(0, state.quantities[id] - 1);
  }
  renderMenu();
  updateBottom();
});

cartSummary.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");
  if (inc) {
    state.quantities[inc.dataset.inc] += 1;
  }
  if (dec) {
    const id = dec.dataset.dec;
    state.quantities[id] = Math.max(0, state.quantities[id] - 1);
  }
  updateCart();
  updateBottom();
});

reviewButton.addEventListener("click", () => {
  if (state.screen === "cart") {
    goTo("menu");
    return;
  }
  goTo("cart");
});

orderButton.addEventListener("click", async () => {
  if (state.screen !== "cart") {
    goTo("cart");
    return;
  }
  goTo("review");
});

reviewBackToCart.addEventListener("click", () => goTo("cart"));

requestCompleteButton.addEventListener("click", () => {
  if (selectedItems().length === 0) {
    goTo("menu");
    return;
  }

  updateReview();
  goTo("placeOrder");
});

placeOrderButton.addEventListener("click", async () => {
  if (selectedItems().length === 0) {
    goTo("menu");
    return;
  }

  updatePlaceOrder();
  try {
    await copyMessage();
    showToast("주문 내용이 복사되었어요. 문자 앱을 열게요.");
  } catch {
    showToast("문자 앱을 열게요. 필요하면 미리보기 내용을 복사해주세요.");
  }
  window.setTimeout(openSms, 350);
});

placeRestartButton.addEventListener("click", () => goTo("home"));

[seatBlock, seatRow, seatNumber, seatDescription].forEach((input) => {
  input.addEventListener("focus", () => scrollSeatInputIntoView(input));
});

[seatType, seatBlock, seatRow, seatNumber, seatDescription, requestMemo, smsPhone].forEach((input) => {
  input.addEventListener("input", () => {
    if (state.screen === "review") {
      updateReview();
    }
    if (state.screen === "placeOrder") {
      updatePlaceOrder();
    }
  });
});

renderSeatOptions();
renderTabs();
renderSubTabs();
renderMenu();
startHeroSlider();
goTo("home");
