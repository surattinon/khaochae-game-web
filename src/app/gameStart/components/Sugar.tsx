import Image from "next/image";
import Sugarr from "../../img/elements/น้ำตาลตโนด.png";

export const Sugar = () => {
  return (
    <div className="absolute z-60 w-screen h-60 flex flex-col justify-center self-center bottom-56">
      <Image src={Sugarr} alt="" height={250} width={250} />
    </div>
  );
};
