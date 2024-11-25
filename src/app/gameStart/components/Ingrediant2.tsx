import Image from "next/image";

import Dip from "../../img/elements/ข้าวแช่และเครื่องเคียง.png";

export const Ingrediant2 = () => {
  return (
    <div className="absolute z-60 w-screen h-60 flex justify-center self-center bottom-56">
      <Image src={Dip} alt="" height={250} width={250} />
    </div>
  );
};
