"use client";

import React from "react";
import Image from "next/image";

import MarketWide from "./img/bgs/2.png";

import { motion, useAnimationControls } from "framer-motion";
import { redirect } from "next/navigation";

export default function Home() {
  const [btnZIndex, setBtnZIndex] = React.useState(10);

  async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function handleBtnClick() {
    setBtnZIndex(0);
    await sleep(2000);
    redirect("/gameStart");
  }

  const MarketAnimate = {
    marketMoveOut: {
      y: "100vw",
    },
    marketMoveIn: {
      y: 0,
      transition: { ease: "easeInOut", duration: 2 },
    },
  };
  const MarketPosControl = useAnimationControls();

  return (
    <main className="bg-blue-300 w-screen h-screen">
      <div className="relative w-full h-full flex flex-col justify-around item-center content-center">
        <motion.button
          className="w-52 self-center mb-20 py-3 bg-[#98806f] border-[#f9e7a0] border-[4px] rounded-2xl shadow-md"
          style={{ zIndex: btnZIndex }}
          onClick={() => {
            MarketPosControl.start("marketMoveIn");
            handleBtnClick();
          }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <h1 className="text-3xl">Game Start!</h1>
        </motion.button>
        <motion.div
          className="w-full h-full absolute"
          variants={MarketAnimate}
          initial="marketMoveOut"
          animate={MarketPosControl}
        >
          <Image
            className="object-cover"
            src={MarketWide}
            alt="market"
            fill={true}
          ></Image>
        </motion.div>
      </div>
    </main>
  );
}
