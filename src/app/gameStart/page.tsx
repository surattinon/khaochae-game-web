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

  async function handleNextDialog(choice: "choice1" | "choice2" | "nextBtn") {
    console.log(dialog.id);
    console.log(dialog.btn?.choice2);
    if (dialog.id === "002") {
      setOpacity(0);
      await sleep(1000);
      setDialogIndex(DialogIndex + 1);
      await sleep(2000);
      setOpacity(1);
      return;
    }

    if (dialog.id === "006" && choice === "choice2") {
      setDialogIndex(DialogIndex + 4);
      return;
    }

    if (DialogIndex === handleDialog().length - 1) {
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
          className={`z-50 absolute flex flex-col justify-between w-80 h-52 bg-white border-solid border-[#725949] border-[7px] self-center bottom-24 rounded-2xl p-3 transition-all duration-700 shadow-lg`}
          style={{
            opacity: `${Opacity}`,
          }}
        >
          <div className="text-black">
            <h1 className="font-bold text-lg">{dialog.name}:</h1>
            <p className="text-sm">{dialog.text}</p>
          </div>
          <div className="flex w-full justify-between px-3">
            <div className="flex flex-col justify-end">
              <button
                style={{
                  opacity: `${dialog.btn?.choice1?.active ? 1 : 0}`,
                }}
                className="mt-3 text-[#FFDE73] px-3 py-1 bg-[#98806f] border-[#FFDE73] border-[2px] rounded-lg shadow-md"
                onClick={() => handleNextDialog("choice1")}
              >
                {dialog.btn?.choice1?.text}
              </button>
              <button
                style={{
                  opacity: `${dialog.btn?.choice2?.active ? 1 : 0}`,
                }}
                className="mt-3 text-[#FFDE73] px-3 py-1 bg-[#98806f] border-[#FFDE73] border-[2px] rounded-lg shadow-md"
                onClick={() => handleNextDialog("choice2")}
              >
                {dialog.btn?.choice2?.text}
              </button>
            </div>
            <button
              style={{
                opacity: `${dialog.btn?.nextBtn?.active ? 1 : 0}`,
              }}
              className="mt-3 text-[#FFDE73] px-3 py-1 bg-[#98806f] border-[#FFDE73] border-[2px] rounded-lg shadow-md"
              onClick={() => handleNextDialog("nextBtn")}
            >
              {dialog.btn?.nextBtn?.text}
            </button>
          </div>
        </div>
        <div className="absolute z-40 w-60 flex justify-center self-center bottom-[17rem]">
          <Image
            className="self-center w-full scale-125"
            src={dialog.char1}
            alt="character"
            width={700}
            height={400}
          />
          <Image
            className="self-center w-full scale-125"
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
