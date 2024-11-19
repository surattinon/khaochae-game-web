import MarketWide from "../img/bgs/2.png";
import InMarket from "../img/bgs/3.png";

import Hidden from "../img/elements/hidden-element.png";

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
      bgImg: MarketWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
    },
    {
      id: "002",
      name: "คุณ",
      text: "หืม? นั้นอะไร",
      bgImg: MarketWide.src,
      char1: Hidden.src,
      char2: Hidden.src,
    },
    {
      id: "003",
      name: "คุณ",
      text: "คุณยายขายอะไรหรอจ้ะ",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
    },
    {
      id: "004",
      name: "คุณยาย",
      text: "โฮะๆ สวัสดีจ้ะเจ้าหนู ยายขายข้าวแช่จ้ะ",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
    },
    {
      id: "005",
      name: "คุณ",
      text: "ข้าวแช่?",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
    },
    {
      id: "006",
      name: "คุณยาย",
      text: "ใช่จ้ะ ข้าวแช่",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
    },
    {
      id: "007",
      name: "คุณ",
      text: "ข้าวแช่ ใช่... ?",
      bgImg: InMarket.src,
      char1: Hidden.src,
      char2: Hidden.src,
    },
  ];

  return market1Dialog;
}
