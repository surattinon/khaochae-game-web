import Image from "next/image";

import SaltFlower from "../../img/elements/ดอกเกลือ.png";
export const SaltFlowerItem = () => {
  return (
    <div className="absolute z-60 w-screen h-60 flex flex-col justify-center self-center bottom-56">
      <Image src={SaltFlower} alt="" height={250} width={250} />
    </div>
  );
};
