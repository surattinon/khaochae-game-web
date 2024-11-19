"use client";

import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

import handleDialog from "./handleDialog";

export default function Home() {
  const [DialogIndex, setDialogIndex] = React.useState(0);
  const [Opacity, setOpacity] = React.useState(1);

  const dialog = handleDialog()[DialogIndex];

  async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleNextDialog() {
    if (dialog.id === "002") {
      setOpacity(0);
      await sleep(1000);
      setDialogIndex(DialogIndex + 1);
      await sleep(2000);
      setOpacity(1);
      return;
    }
    if (DialogIndex === handleDialog.length - 1) {
      redirect("/endGame");
    } else {
      setDialogIndex(DialogIndex + 1);
    }
  }

  return (
    <main className="bg-blue-300 w-screen h-screen">
      <div className="relative w-full h-full flex flex-col justify-around item-center content-center">
        <div>
          <Image
            className="object-cover"
            src={dialog.bgImg}
            alt="market"
            fill={true}
          />
        </div>
        <div
          className={`z-50 absolute flex flex-col justify-between w-80 h-36 bg-white border-solid border-[#725949] border-[7px] self-center bottom-48 rounded-2xl p-3 transition-all duration-700`}
          style={{
            opacity: `${Opacity}`,
          }}
        >
          <div className="text-black">
            <h1 className="font-bold text-lg">{dialog.name}</h1>
            <p className="text-sm">{dialog.text}</p>
          </div>
          <button
            className="self-end mt-3 text-black"
            onClick={handleNextDialog}
          >
            ถัดไป..
          </button>
        </div>
        <div className="absolute z-40 w-80 flex justify-center self-center bottom-[22rem]">
          <Image
            className="self-center w-full scale-[1.7]"
            src={dialog.char1}
            alt="character"
            width={700}
            height={400}
          />
          <Image
            className="self-center w-full scale-[1.7]"
            src={dialog.char2}
            alt="character"
            width={700}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
