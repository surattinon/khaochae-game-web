import MarketWide from "../img/bgs/2.png";
import InMarket from "../img/bgs/3.png";
import inMarketFrame from "../img/bgs/4.png";
import oldHouseWide from "../img/bgs/5.png";
import oldHouseClose from "../img/bgs/6.png";
import MaliTree from "../img/bgs/7.png"

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
      bgImg: inMarketFrame.src,
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
          active: false,
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
      id: "019",
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
      id: "020",
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
      id: "021",
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
      id: "022",
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
    {
      id: "023",
      name: "คุณ",
      text: "(คิดในใจ : นันมัน!!? คนทีเห็นในรูปร้านคุณยายเมือกีนีนี หรือว่าจะเป็น!!?)",
      bgImg: oldHouseClose.src,
      char1: Jun.src,
      char2: Meapetch.src,
      btn: {
        choice1: {
          active: true,
          text: "ผะ….ผะ…..ผี!!!?",
        },
        choice2: {
          active: true,
          text: "ทวด!?",
        },
        nextBtn: {
          active: false,
          text: "",
        },
      },
    },
    {
      id: "024",
      name: "จัน",
      text: "พูดอะไรของเอ็งน่ะ เสียมารยาทนัก!",
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
      id: "025",
      name: "จัน",
      text: "เจ้ายังไม่ตืนดีงันรึ!? ท่านนีคือแม่เพชร นายหญิงของเราเจ้าของครัวแห่งนีอย่�����งไรเล่า!",
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
      id: "026",
      name: "จัน",
      text: "เจ้านีน่ะเป็นมือใหม่ทีครัวของวังเราพึงรับเข้ามาวันนีขอรับ",
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
      id: "027",
      name: "จัน",
      text: "กระผมต้องขออภัยแทนเจ้านีด้วย",
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
      id: "028",
      name: "คุณ",
      text: "(คิดในใจ : โห อะไรอีกเนีย เจ๋งไปป้ะ ตืนมาอีกทีก็กลายเป็นเชฟชาววังซะละ)",
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
      id: "029",
      name: "แม่เพชร",
      text: "ไม่เป็นไรจ้ะ อย่างไรก็ดี ถือเป็นเรืองน่ายินดีนักทีเจ้าสนใจมาทํางานในครัวของเราเช่นนี ขอ ต้อนรับเข้าสู่ครัวของข้า",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "030",
      name: "คุณ",
      text: "(คิดในใจ : แล้ว…อันนีทีคุณยายเจ้าของร้านบอกว่าคือข้าวแช่นี)",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
      char2: Meapetch.src,
      btn: {
        choice1: {
          active: true,
          text: "“เอ่อ.. คือ… ข้าวแช่??",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: false,
          text: "",
        },
      },
    },
    {
      id: "031",
      name: "แม่เพชร",
      text: "ใช่แล้วล่ะ ข้าได้รับมอบหมายให้ทําข้าวแช่เมืองเพชรบุรีถวายน่ะ\nจากทีเจ้าทําหน้าสงสัยเช่นนันข้าจะเล่าให้ฟัง\nข้าวแช่เพชรบุรี เดิมทีแล้วมีต้นกําเนิดมาจากอาหารพืนบ้านของชาวมอญทีชือว่า เปิงด๊าดจ์ น่ะ",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
      char2: Meapetch.src,
      btn: {
        choice1: {
          active: true,
          text: "เปิงด๊าดจ์",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: false,
          text: "",
        },
      },
    },
    {
      id: "032",
      name: "แม่เพชร",
      text: "เปิง หมายถึงข้าว ส่วนด๊าดจ์ หมายถึงน้ำจ้ะ\nข้าวแช่เพิงจะถูกเผยแพร่เข้ามาทีนีไม่นานนัก",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "033",
      name: "คุณ",
      text: "เดียวนะ นีสมัยรัชกาลทีเท่าไหร่?",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "033",
      name: "แม่เพชร",
      text: "เจ้าถามพิลึกนัก ตอนนีเราอยู่ในสมัยการปกครองของรัชกาลที 4 อย่างไรเล่า",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "034",
      name: "คุณ",
      text: "เอ๋?",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "035",
      name: "แม่เพชร",
      text: "สูตรข้าวแช่นีก็มาจากสนมเอกในวังของท่านทีชือ เจ้าจอมมารดากลิน นีล่ะ\nในวันทีอากาศร้อนเช่นนี บรรดาขุนนางชันสูง ก็มักจะทานข้าวแช่อยู่บ่อยครัง\nและต่อไปข้าจะแนะนําเครืองเคี…….",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "036",
      name: "คนครัว",
      text: "ไอ้จันนน!!!!",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "037",
      name: "แม่เพชร",
      text: " ข้างนอกเสียงดังอะไรกันน่ะ ",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "038",
      name: "คนครัว",
      text: "เกิดปัญหาแล้ว!! วัตถุดิบในครัวหมดทุกอย่างเลยขอรับ!!!!",
      bgImg: oldHouseClose.src,
      char1: Hidden.src,
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
      id: "039",
      name: "นายจัน & แม่เพชร",
      text: "เจ้าว่าเยียงไรนะ!!?",
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
      id: "040",
      name: "จัน",
      text: "แย่แล้ว แบบนีจะทําอย่างไรดี",
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
      id: "041",
      name: "แม่เพชร",
      text: "ข้านึกออกแล้ว งันเอาเช่นนีดีหรือไม่\nเจ้า 2 คนไปช่วยหาวัตถุดิบทําข้าวแช่มาให้ข้าที",
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
      id: "041",
      name: "คุณ",
      text: "(โอ้ว ได้เวลาออกโรงแล้วสินะ!)",
      bgImg: oldHouseClose.src,
      char1: Jun.src,
      char2: Meapetch.src,
      btn: {
        choice1: {
          active: true,
          text: "ตกลง",
        },
        choice2: {
          active: false,
          text: "",
        },
        nextBtn: {
          active: false,
          text: "",
        },
      },
    },
    {
      id: "042",
      name: "แม่เพชร",
      text: "ส่วนจัน เจ้าก็ดูแลเพือนของเจ้าให้ดีล่ะ",
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
      id: "043",
      name: "จัน",
      text: "ขอรับนายหญิง",
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
      id: "044",
      name: "จัน",
      text: "เอาล่ะ อย่างแรกทีต้องมีเลยคือ ดอกมะลิ ข้างเรือนเรามีส่วนทีปลูกกันเองอยู่ตามข้ามา",
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
      id: "045",
      name: "คุณ",
      text: "โห กลินหอมมาก",
      bgImg: MaliTree.src,
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
      id: "046",
      name: "จัน",
      text: "ฮ่าฮ่าฮ่า นีแหละดอกมะลิทีข้าพิถีพิถันดูแลกัน เจ้าเด็ดมาได้เลย",
      bgImg: MaliTree.src,
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
      id: "047",
      name: "คุณ",
      text: "ว่าแต่เอาดอกมะลิไปทําอะไรน่ะ",
      bgImg: MaliTree.src,
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
      id: "048",
      name: "จัน",
      text: "โธ่เจ้านีไม่รู้เรืองเสียเลย\nดอกมะลิ เขาเอามาลอยพร้อมกับข้าวแช่เพือให้กลินหอมอย่างไรเล่า",
      bgImg: MaliTree.src,
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
      id: "048",
      name: "คุณ",
      text: "เป็นเช่นนันนีเอง",
      bgImg: MaliTree.src,
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
      id: "049",
      name: "จัน",
      text: "เอาล่ะ ต่อไปเราก็จะไปนาเกลือกันต่อ",
      bgImg: MaliTree.src,
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
  ];

  return market1Dialog;
}
