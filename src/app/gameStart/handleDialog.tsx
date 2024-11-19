import MarketWide from "/public/img/bgs/2.PNG";
import InMarket from "/public/img/bgs/3.PNG";

import Hidden from "/public/img/elements/hidden-element.png";

export default function handleDialog() {
  const market1Dialog: {
    id: string;
    name: string;
    text: string;
    bgImg: string;
    char1: string;
    char2: string;
  }[] = [
    {
      id: "001",
      name: "คุณ",
      text: " ว้าว ตลาดเมืองเก่าเพชรบุรีนี ของเยอะแยะไปหมดเลย",
      bgImg: MarketWide,
      char1: Hidden,
      char2: Hidden,
    },
    {
      id: "002",
      name: "คุณ",
      text: "หืม? นั้นอะไร",
      bgImg: MarketWide,
      char1: Hidden,
      char2: Hidden,
    },
    {
      id: "003",
      name: "คุณ",
      text: "คุณยายขายอะไรหรอจ้ะ",
      bgImg: InMarket,
      char1: Hidden,
      char2: Hidden,
    },
    {
      id: "004",
      name: "คุณยาย",
      text: "โฮะๆ สวัสดีจ้ะเจ้าหนู ยายขายข้าวแช่จ้ะ",
      bgImg: InMarket,
      char1: Hidden,
      char2: Hidden,
    },
    {
      id: "005",
      name: "คุณ",
      text: "ข้าวแช่?",
      bgImg: InMarket,
      char1: Hidden,
      char2: Hidden,
    },
    {
      id: "006",
      name: "คุณยาย",
      text: "ใช่จ้ะ ข้าวแช่",
      bgImg: InMarket,
      char1: Hidden,
      char2: Hidden,
    },
    {
      id: "007",
      name: "คุณ",
      text: "ข้าวแช่ ใช่... ?",
      bgImg: InMarket,
      char1: Hidden,
      char2: Hidden,
    },
  ];

  return market1Dialog;
}
