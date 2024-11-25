import Image from "next/image";
import Fishh from "../../img/elements/ปลายี่สน.png";

export const Fish = () => {
  return (
    <div className="absolute z-60 w-screen h-60 flex flex-col justify-center self-center bottom-56">
      <Image src={Fishh} alt="" height={250} width={250} />
    </div>
  );
};
