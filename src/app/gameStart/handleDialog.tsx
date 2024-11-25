import MarketWide from "../img/bgs/2.png";
import InMarket from "../img/bgs/3.png";
import inMarketFrame from "../img/bgs/4.png";
import oldHouseWide from "../img/bgs/5.png";
import oldHouseClose from "../img/bgs/6.png";
import MaliTree from "../img/bgs/7.png";
import SaltFarm from "../img/bgs/8.png";
import ForestWay from "../img/bgs/9.png";
import Beach from "../img/bgs/10.png";

import Grandma from "../img/chars/คุณยายใจดี.png";
import Jun from "../img/chars/นายจัน.png";
import Meapetch from "../img/chars/แม่เพชร.png";
import SaltFarmer from "../img/chars/ชาวนาเกลือ.png";
import Plonyisa from "../img/chars/ภูต_ปลนยี่สา.png";
import Monkey from "../img/chars/ลิง_ประกิต.png";
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
    {
      id: "050",
      name: "จัน",
      text: "จะไปทางไหนก็เหมือนกันแหละน่า เจ้าก็เลือกเอาละกันว่าอยากไปทางไหน",
      bgImg: ForestWay.src,
      char1: Jun.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: true,
          text: "ซ้าย",
        },
        choice2: {
          active: true,
          text: "ขวา",
        },
        nextBtn: {
          active: false,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "051",
      name: "",
      text: " เจ้าเจอชายหาดสวยงาม แม้จะใช้เวลาเพิมอีกนิดแต่ได้ชืนชม�����วามสว���งามและลมริม ทะเลแสนสบาย",
      bgImg: Beach.src,
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
      id: "052",
      name: "",
      text: "สองข้างทางเป็นนาข้าว ถึงจะดูธรรมดาทัวไปแต่ก็อดปฎิเสธไม่ได้ว่าก็ดูเขียวอุดม สมบูรณ์ สวยงามดีนะ",
      bgImg: SaltFarm.src,
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
      id: "053",
      name: "จัน",
      text: "นีคือทีแรกทีเราจะมาหาวัตถุดิบ",
      bgImg: SaltFarm.src,
      char1: Jun.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: true,
          text: "แล้วเราเอาจากใครล่ะ",
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
      id: "054",
      name: "? ",
      text: "ข้าเอง!!",
      bgImg: SaltFarm.src,
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
      id: "055",
      name: "คุณ",
      text: "เห้ย!!?",
      bgImg: SaltFarm.src,
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
      id: "056",
      name: "ชาวนา",
      text: "ตกใจอะไรเล่า ทําอย่างกับเห็นผี",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
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
      id: "057",
      name: "คุณ",
      text: "(เอ่อ ก็เหมือนอยู่นะ)",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
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
      id: "058",
      name: "จัน",
      text: "แม่เพชรให้พวกข้ามาเอา ดอกเกลือ น่ะ พอดีว่าทีครัวมันหมดแล้ว",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "059",
      name: "ชาวนา",
      text: "อย่างงันรึ หมดแบบหมด?",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "060",
      name: "จัน",
      text: "บ๋อแบ๋เลยจ้ะ",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "061",
      name: "ชาวนา",
      text: "นู่นน่ะ เจ้าไปหยิบเอาได้เลย ข้าเตรียมไว้หมดละ",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "062",
      name: "คุณ",
      text: "นีนายจัน ดอกเกลือ นี มันพิเศษยังไงหรอ เกลือปกติใช้ไม่ได้หรอ",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "063",
      name: "ชาวนา",
      text: "หึ ดอกเกลือที อําเภอบ้านแหลม จังหวัดเพชรบุรี นีน่ะ เป็นเกลือชุดแรกทีลอยตัวขึนมาเกาะ ตัวเป็นแพบนผิวนํา",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "064",
      name: "ชาวนา",
      text: "พวกข้าคนทํานาเกลือจะช้อนเอาดอกเกลือเหล่านีขึนมาเก็บไว้ก่อนทีมันจะจมลงไป",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "065",
      name: "ชาวนา",
      text: "ดอกเกลือ จึงมีความบริสุทธิกว่าเกลือทัวไป รสชาติไม่เค็มจัด และมีรสอมหวานนิด ๆ ซ่อนอยู่",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "066",
      name: "ชาวนา",
      text: "ป็นรสชาติเค็มทีมีความกลมกล่อม เป็นราชาของเกลือทะเลเลยล่ะ!",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "066",
      name: "คุณ",
      text: "โห พรีเมียมเว่อร์!",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "067",
      name: "จัน",
      text: "พรีอะไรของเจ้าน่ะ พูดจาแปลกๆ นะเจ้านี",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "068",
      name: "จัน",
      text: "ขอบคุณเจ้ามาก เดียวข้าให้คนเอารางวัลมาให้นะพวกข้าต้องรีบไปหา นํ าตาลตโนด ต่อแล้วล่ะ",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "069",
      name: "ชาาวนา",
      text: "อืม เจ้าเดินตรงจากทีนีไปได้เลยนะ ข้าไปก่อนล่ะ",
      bgImg: SaltFarm.src,
      char1: SaltFarmer.src,
      char2: Jun.src,
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
      id: "070",
      name: "คุณ",
      text: "อ่าว\n(เจ้าเจอควายตัวหนึงดูเหมือนกําลังติดอยู่ในโคลน เจ้าจะ?)",
      bgImg: SaltFarm.src,
      char1: Hidden.src,
      char2: Hidden.src,
      btn: {
        choice1: {
          active: true,
          text: "ช่วย",
        },
        choice2: {
          active: true,
          text: "ไม่ช่วย",
        },
        nextBtn: {
          active: false,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "071",
      name: "",
      text: "(จ้ากําลังจะเดินเข้าไปช่วย แต่ควายตัวนันหันมาแล้วร้องใส่)",
      bgImg: SaltFarm.src,
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
      id: "072",
      name: "ควาย",
      text: "มออออออ",
      bgImg: SaltFarm.src,
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
      id: "073",
      name: "คุณ",
      text: "หืมม?",
      bgImg: SaltFarm.src,
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
      id: "074",
      name: "จัน",
      text: "มันกําลังบอกว่าไม่ต้องไปยุ่งน่ะ มันกําลังสบาย เราไปกันเถอะ",
      bgImg: SaltFarm.src,
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
      id: "075",
      name: "",
      text: "(จ้ากําลังจะเดินผ่านไป แต่ควายตัวนันหันมาแล้วร้องใส่)",
      bgImg: SaltFarm.src,
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
      id: "076",
      name: "ควาย",
      text: "มออออออ",
      bgImg: SaltFarm.src,
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
      id: "077",
      name: "คุณ",
      text: "เอ้ะ?",
      bgImg: SaltFarm.src,
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
      id: "078",
      name: "จัน",
      text: "มันกําลังบอกว่าไม่คิดจะสนใจใยดีเลยหรอ",
      bgImg: SaltFarm.src,
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
      id: "079",
      name: "คุณ",
      text: "อ่า ช่วยก็ได้",
      bgImg: SaltFarm.src,
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
      id: "080",
      name: "ควาย",
      text: "มออออออ",
      bgImg: SaltFarm.src,
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
      id: "080",
      name: "จัน",
      text: "มันบอกว่าถามไปงันแหละ ไม่ต้องมาช่วย เราไปกันเถอะ",
      bgImg: SaltFarm.src,
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
      id: "081",
      name: "คุณ",
      text: "อืมมม ทีนี อ.บ้านลาด หรอ ดูโหวงๆ จังนะ",
      bgImg: ForestWay.src,
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
      id: "082",
      name: "จัน",
      text: "ใช่แล้วแหล่งปลูกตาลทีดีทีสุดน่ะ แต่ข้าว่าเจ้าคิดไปเองแล้วแหละ",
      bgImg: ForestWay.src,
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
      id: "083",
      name: "คุณ",
      text: "งั้นหรอ แล้วไหน--\n(เจียก)",
      bgImg: ForestWay.src,
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
      id: "084",
      name: "คุณ",
      text: "--เจ้าของ...?",
      bgImg: ForestWay.src,
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
      id: "085",
      name: "ลิง",
      text: "เจียก",
      bgImg: ForestWay.src,
      char1: Jun.src,
      char2: Monkey.src,
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
      id: "086",
      name: "คุณ",
      text: "มีแค่ลิงงันหรอ?",
      bgImg: ForestWay.src,
      char1: Jun.src,
      char2: Monkey.src,
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
      id: "087",
      name: "จัน",
      text: "นันสินะ",
      bgImg: ForestWay.src,
      char1: Jun.src,
      char2: Monkey.src,
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
      id: "088",
      name: "คุณ",
      text: "งั้นทำยังงไงดีล่ะ",
      bgImg: ForestWay.src,
      char1: Jun.src,
      char2: Monkey.src,
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
      id: "089",
      name: "จัน",
      text: "ลองถามมันดูสิ",
      bgImg: ForestWay.src,
      char1: Jun.src,
      char2: Monkey.src,
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
      id: "090",
      name: "ลิง",
      text: "เจียก",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
      btn: {
        choice1: {
          active: true,
          text: "นี่....",
        },
        choice2: {
          active: true,
          text: "คือว่า....",
        },
        nextBtn: {
          active: false,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "091",
      name: "คุณ",
      text: "นี…. เจ้าของสวนอยู่ไหนละ",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "092",
      name: "คุณ",
      text: "คือว่า…. นายเห็นเจ้าของสวนไหม",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "093",
      name: "ลิง",
      text: "เจียก เจียก...ก็คุยมาตังนาน ข้านีไงเจ้าของ",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "094",
      name: "คุณ",
      text: "??? ทําไมฟังรู้เรืองนะ??",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "095",
      name: "จัน",
      text: "หุหุหุ หึหึหึ ฮ่าฮ่าฮ่า",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "096",
      name: "คุณ",
      text: "นีนายก็รู้อยู่แล้วหรอ!?",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "097",
      name: "ลิง",
      text: "เจียก เจียก....เหอะ หูไม่ดีแล้วยังโทษคนอืนอีก นีพวกเจ้ามาทําอะไรกันน่ะ",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "098",
      name: "ลิง",
      text: "เจียก เจียก....พวกเจ้าต้องการอะไร?",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "099",
      name: "จัน",
      text: "พวกเรามาหานําตาลตโนดน่ะ",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "100",
      name: "ลิง",
      text: "เจียก เจียก!!....ข้าไม่ให้พวกเจ้าง่ายๆ หรอก! มีอะไรมาแลกเปลียนล่ะ!",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "101",
      name: "คุณ",
      text: "ข้าว่าพวกเรามีนะ",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "102",
      name: "จัน",
      text: "มีรึ? มีอะไร???",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "103",
      name: "คุณ",
      text: "ระหว่างทางนายแอบเก็บกล้วยข้างทางมาด้วยแท้ๆ คิดว่าชันไม่รึไง",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "104",
      name: "จัน",
      text: "อ๊ากกก โดนจับได้แล้วงันรึ แต่ข้าไม่ให้หรอก นีมันของข้าเว้ยย！",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
      btn: {
        choice1: {
          active: true,
          text: "แย่งกล้วย",
        },
        choice2: {
          active: true,
          text: "กดดันด้วยสายตา",
        },
        nextBtn: {
          active: false,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "105",
      name: "จัน",
      text: "ไม่นะ กล้วยของข้า!! จิตใจเจ้าอมหิตนัก!",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "106",
      name: "จัน",
      text: "ก็ได้ๆ ไม่เห็นต้องทําสายตาน่ากลัว เช่นนันเลย",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "107",
      name: "ลิง",
      text: "เจียก เจียก~~....ฮ่าๆ เป็นข้อแลกเปลียนทีน่าสนใจ งันก็รับไปเลยนําตาลโตนดของข้า",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "108",
      name: "คุณ",
      text: "จะว่าไป นําตาลโตนดของเจ้าจะพิเศษเช่นไรกัน?",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "109",
      name: "ลิง",
      text: "เจียกๆๆๆ!!!..อย่าบังอาจดูถูกนําตาลโตนดของข้านะ",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "110",
      name: "ลิง",
      text: "เจียกๆๆ (นํ าตาลโตนดทีนี มีความหวานหอม กลิน และรสชาติทีเป็นเอกลักษณ์มาก ความหวานก็กลมกล่อม รสนุ่ม ",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "111",
      name: "ลิง",
      text: "แถมยังมีรสเค็มเจือจางจากแหล่งต้นตาลทีขึนบนพืนดินทีมีเกลือแร่ธรรมชาติอยู่มาก เช่นนีย่อมต้องพิเศษอยู่แล้ว",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "112",
      name: "คุณ",
      text: "อย่างนีนีเอง!",
      bgImg: ForestWay.src,
      char1: Monkey.src,
      char2: Jun.src,
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
      id: "113",
      name: "จัน",
      text: "หึ",
      bgImg: ForestWay.src,
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
      id: "113",
      name: "คุณ",
      text: "เอาน่าจัน เราไปกันต่อเถอะ",
      bgImg: ForestWay.src,
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
      id: "114",
      name: "จัน",
      text: "ไปก็ไป",
      bgImg: ForestWay.src,
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
      id: "115",
      name: "จัน",
      text: "อากาศทีนีช่างดียิงนัก",
      bgImg: Beach.src,
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
      id: "116",
      name: "คุณ",
      text: "อากาศบริสุทธิ กับเสียงคลืนทะเลชวนให้สงบใจจริงๆ",
      bgImg: Beach.src,
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
      id: "117",
      name: "จัน",
      text: "วัตถุดิบสุดท้ายอยู่ทีนีล่ะ",
      bgImg: Beach.src,
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
      id: "118",
      name: "คุณ",
      text: "คืออะไรหรอ",
      bgImg: Beach.src,
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
      id: "119",
      name: "ภูติ",
      text: "มีแขกมาเยียมเยือนอีกแล้วสินะ ขอต้อนรับพวกท่านสู่หมู่บ้านของข้า ข้ามีนามว่า ปลนยีสา",
      bgImg: Beach.src,
      char1: Plonyisa.src,
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
      id: "120",
      name: "คุณ",
      text: "โห ชืออย่างจ๊าบอะ",
      bgImg: Beach.src,
      char1: Plonyisa.src,
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
      id: "121",
      name: "จัน",
      text: "พูดจาพิลึกอีกแล้วนะเจ้าน่ะ แต่ก็แปลว่าพวกเรามาถูกทีแล้วสินะ ปลนยีสา เพราะทีนีมี….",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "122",
      name: "ปลนยีสา",
      text: "…ปลายีสน!",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "123",
      name: "ปลนยีสา& จัน",
      text: "ผ่ามมมมมม!!!",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "124",
      name: "คุณ",
      text: "............",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "125",
      name: "ปลนยีสา",
      text: "ฮ่าๆๆ เจ้าช่างเป็นมนุษย์ทีอารมณ์ดีนัก ไหนบอกข้ามาซิ ว่าเหตุใดพวกเจ้าจึงต้องเดินทางมา เยียมเยียนถึงทีนี",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "126",
      name: "จัน",
      text: "พวกเราต้องการวัตถุดิบไปทําข้าวแช่ ตอนนีพวกข้าขาดแค่ ปลายีสน แล้ว",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "127",
      name: "ปลนยีสา",
      text: "ข้าก็อยากช่วยพวกเจ้าอยู่หรอก แต่พึงมีเศรษฐีเหมาปลาไปหมดคลังหมู่บ้านนีสิ",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "128",
      name: "คุณ",
      text: "อ้าว แล้วแบบนีจะทํายังไงดี",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "129",
      name: "ปลนยีสา",
      text: "นับว่าพวกเจ้าโชคดีทีเจอภูตอย่างข้านะ ปกติข้าไม่ได้ปรากฏตัวให้เห็นง่ายๆ หรอก พวกเจ้า น่ะลองไปจับปลาดูสิ เดียวข้าช่วย ",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "130",
      name: "จัน",
      text: "ยุ่งยากอีกแล้ว",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "131",
      name: "คุณ",
      text: "น่าสนุกดีออก",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "132",
      name: "ปลนยีสา",
      text: "แต่ก่อนอืนข้าขอแนะนําปลายีสนของทีนีก่อน",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "133",
      name: "ปลนยีสา",
      text: "ปลายีสนมีอีกชือว่า ปลากระเบนเนือดํา เป็นวัตถุดิบพืนบ้านทีมีชือเสียงและถูกส่งออก จนต้องมีคนมา เหมาซือไปน่ะ",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "134",
      name: "ปลนยีสา",
      text: "เอาล่ะ ทีนีพวกเจ้าก็จัดการจับปลาเลย *ปลนยีสา เสกปลาออกมาจํานวนมาก*",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
      btn: {
        choice1: {
          active: true,
          text: "รีบวิ่งไปจับปลา",
        },
        choice2: {
          active: true,
          text: "ผลักนายจันลงทะเล",
        },
        nextBtn: {
          active: false,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "135",
      name: "",
      text: "*คุณได้รับปลายีสนจํานวนมาก*",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "136",
      name: "คุณ",
      text: "ลุยเลยจัน ฉันเลือกนาย",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "137",
      name: "จัน",
      text: "อ๊ากกก! เจ้าบังอาจแกล้งข้ารึ!?",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "138",
      name: "",
      text: "*แม้จะวุ่นวายแต่คุณได้ปลารับปลายีสนเป็นจํานวนมาก*",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "139",
      name: "ปลนยี่สา",
      text: "งันเท่านีก็คงหมดหน้าทีของข้าแล้ว ขอให้พวกเจ้าเดินทางกลับโดยสวัสดิภาพ",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "140",
      name: "คุณ & จัน",
      text: "ขอบคุณนะท่าน พวกข้าจะไม่ลืมบุญคุณนีเลย!",
      bgImg: Beach.src,
      char1: Plonyisa.src,
      char2: Jun.src,
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
      id: "141",
      name: "จัน",
      text: "พวกข้ากลับมาแล้วขอรับนายหญิง!!",
      bgImg: oldHouseClose.src,
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
      id: "142",
      name: "แม่เพชร",
      text: "ข้ากําลังรออยู่พอดี พวกเจ้าออกไปนานมากทีเดียว",
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
      id: "143",
      name: "คุณ",
      text: "นีคือวัตถุดิบทังหมดทีพวกเราหามาได้\n(ดอกมะลิ,เกลือ,นําตาลโตนด,ปลายีสน)",
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
      id: "144",
      name: "แม่เพชร",
      text: "พวกเจ้าเก่งมาก เท่านีเราก็จะสามารถทําข้าวแช่เพชรบุรีได้แล้ว โปรดรอสักครู่หนึง",
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
      id: "145",
      name: "",
      text: "*แม่เพชรหายไปในครัวสักพักหนึง และออกมาพร้อมกับข้าวแช่ทีสําเร็จแล้ว*",
      bgImg: oldHouseClose.src,
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
      id: "145",
      name: "แม่เพชร",
      text: "เป็นอย่างไร น่าทานใช่ไหมล่ะ",
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
      id: "146",
      name: "จัน",
      text: "น่าทานมากขอรับ! กลินก็หอมอบอวล",
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
      id: "147",
      name: "คุณ",
      text: "หิวโหยมาก! ว่าแต่ในนีมีอะไรบ้างหรอ?",
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
      id: "148",
      name: "แม่เพชร",
      text: "ข้าวแช่เพชรบุรี ทีเสร็จสมบูรณ์นี ประกอบไปด้วย ข้าวสวย นําลอยดอกมะลิ พร้อมกับเครืองเคียง 3 อย่างจ้ะ",
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
      id: "149",
      name: "จัน",
      text: "เครืองเคียงมีอะไรบ้างหรือขอรับ?",
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
      id: "150",
      name: "แม่เพชร",
      text: "อย่างแรกก็คือปลายีสนผัดหวาน ต่อมาคือลูกกะปิ และสุดท้ายนีก็คือไชโป๊วผัดหวานจ้ะ",
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
      id: "151",
      name: "แม่เพชร",
      text: "พวกเจ้าสามารถลองชิมได้เลยนะจ๊ะ",
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
      id: "152",
      name: "จัน",
      text: "งันหรือขอรับ งันกระผมขอไม่เกรงใจเลยแล้วกัน!!",
      bgImg: oldHouseClose.src,
      char1: Jun.src,
      char2: Meapetch.src,
      btn: {
        choice1: {
          active: true,
          text: "อร่อยจัด สุโก้ยยย!!",
        },
        choice2: {
          active: true,
          text: "อร่อยแสงออกปาก โฮกกกก!!",
        },
        nextBtn: {
          active: false,
          text: "ต่อไป",
        },
      },
    },
    {
      id: "151",
      name: "แม่เพชร",
      text: "ถ้าเป็นเช่นนันข้ามีอะไรมาให้เจ้าทดสอบ หากเจ้าสามารถตอบคําถามของข้าได้ถูกต้อง ทังหมด เจ้าจะได้เลือนยศตอบแทนทีเจ้าช่วยพวกข้า ",
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
      id: "151",
      name: "คุณ",
      text: "จัดมาได้โลยยยยย!!",
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
