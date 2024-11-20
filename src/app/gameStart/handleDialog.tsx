import MarketWide from "../img/bgs/2.png";
import InMarket from "../img/bgs/3.png";
import inMarketFrame from "../img/bgs/4.png";
import oldHouseWide from "../img/bgs/5.png";
import oldHouseClose from "../img/bgs/6.png";

import Grandma from "../img/chars/คุณยายใจดี.png";
import Jun from "../img/chars/นายจัน.png";
import Meapetch from "../img/chars/แม่เพชร.png";
import Hidden from "../img/elements/hidden-element.png";

export default function handleDialog() {
  const market1Dialog = [
    {
      id: "001",
      name: "คุณ",
      text: " ว้าว ตลาดเมืองเก่าเพชรบุรีนี ของเยอะแยะไปหมดเลย",
      bgImg: MarketWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "002",
      name: "คุณ",
      text: "หืม? นั้นอะไร",
      bgImg: MarketWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "003",
      name: "คุณ",
      text: "คุณยายขายอะไรหรอจ้ะ",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "004",
      name: "คุณยาย",
      text: "โฮะๆ สวัสดีจ้ะเจ้าหนู ยายขายข้าวแช่จ้ะ",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "005",
      name: "คุณ",
      text: "ข้าวแช่?",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "006",
      name: "คุณยาย",
      text: "ใช่จ้ะ ข้าวแช่",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: true,
          text: "ข้าวแช่ ใช่... ?",
        },
        choice2: {
          active: true,
          text: "ข้าวแช่คือ..?",
        },
        nextBtn: {
          active: false,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "007",
      name: "คุณ",
      text: "ข้าวแช่ใช่แบบ ตุ้งแช่ หรือเปล่า แฮ่!",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "008",
      name: "คุณยาย",
      text: ".....",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "009",
      name: "คุณ",
      text: "ขอโทษจ่ะ แหะๆ...",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "009",
      name: "คุณ",
      text: "ข้าวแช่คือข้าวใส่นําหรอจ้ะ คล้ายข้าวต้มหรือเปล่านะ?",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "010",
      name: "คุณยาย",
      text: "ไม่ใช่หรอก",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "011",
      name: "คุณ",
      text: "แล้วนั่น รูปบนผนังคือใครหรอจ้ะยาย",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "012",
      name: "คุณยาย",
      text: "อ๋อ แม่เพชรจ้ะ ต้นตําหรับสูตรและบรรพบุรุษยายเอง",
      bgImg: inMarketFrame.src,
      char1: Grandma.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "013",
      name: "คุณยาย",
      text: "มานีสิ เดียวยายจะเล่าอะไรให้ฟัง",
      bgImg: inMarketFrame.src,
      char1: Grandma.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "014",
      name: "คุณ",
      text: "เฮ้ยยย!!!??",
      bgImg: Hidden.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "015",
      name: "คุณ",
      text: "อืมมม…? ทีนี่?",
      bgImg: oldHouseWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "016",
      name: "จัน",
      text: "นีมันยามใดกันแล้ว เจ้าขีคร้านนี! เจ้ายังมีหน้าหนีมาแอบหลับในครัวงันรึ!?",
      bgImg: oldHouseWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "017",
      name: "คุณ",
      text: "ใครอะ? พูดกับเราหรอ? (คิดในใจ)",
      bgImg: oldHouseWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "018",
      name: "คุณ",
      text: "ใครอะ? พูดกับเราหรอ? (คิดในใจ)",
      bgImg: oldHouseWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: true,
          text: "ที่นี่คือ?",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: false,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "019",
      name: "คุณ",
      text: "ขอโทษนะ แต่ทีนีคือ-",
      bgImg: oldHouseWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "020",
      name: "จัน",
      text: "โธ่! มานีเลยยยย! จะมาช่วยครัวแล้วยังจะแอบอู้งานอีก!",
      bgImg: oldHouseWide.src,
      char1: Jun.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "021",
      name: "คุณ",
      text: "ทีไหน- อ่าว เดินช้าๆ หน่อยสิ!",
      bgImg: oldHouseWide.src,
      char1: Jun.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "022",
      name: "แม่เพชร",
      text: "อ้าว นายจัน หนวดเขียว ข้ากําลังรอท่านอยู่พอดี",
      bgImg: oldHouseClose.src,
      char1: Jun.src,
      char2: Meapetch.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "023",
      name: "แม่เพชร",
      text: "แล้วอีกท่านคือ?",
      bgImg: oldHouseClose.src,
      char1: Jun.src,
      char2: Meapetch.src,
      btn: {
        choice1: {
          active: false,
          text: "",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: true,
          text: "ต่อไป",
        },
      },
    },
  ];

  return market1Dialog;
}
