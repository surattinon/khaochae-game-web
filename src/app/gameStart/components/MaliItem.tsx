import Image from "next/image";
import MaliFlower from "../../img/elements/ดอกมะลิ.png";

export default function MaliItem() {
  return (
    <div className="absolute z-60 w-screen h-60 flex flex-col justify-center self-center bottom-96">
      <Image
        className="absolute self-center left-6"
        src={MaliFlower}
        alt=""
        height={400}
        width={400}
      />
      <h2 className="absolute text-black font-bold drop-shadow-xl self-center bottom-12">
        ได้รับดอกมะลิ
      </h2>
    </div>
  );
}
