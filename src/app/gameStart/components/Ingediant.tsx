import Image from "next/image";
import MaliFlower from "../../img/elements/ดอกมะลิ.png";
import Salt from "../../img/elements/ดอกเกลือ.png";
import Sugar from "../../img/elements/น้ำตาลตโนด.png";
import Fish from "../../img/elements/ปลายี่สน.png";

export const Ingediant = () => {
  const size = 80;
  return (
    <div className="absolute z-30 w-screen h-60 flex justify-center self-center bottom-60">
      <Image
        className="self-center"
        src={MaliFlower}
        alt=""
        height={size}
        width={size}
      />
      <Image
        className="self-center"
        src={Salt}
        alt=""
        height={size}
        width={size}
      />
      <Image
        className="self-center"
        src={Sugar}
        alt=""
        height={size}
        width={size}
      />
      <Image
        className="self-center"
        src={Fish}
        alt=""
        height={size}
        width={size}
      />
    </div>
  );
};
