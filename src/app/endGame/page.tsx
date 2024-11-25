import Link from "next/link";
import React from "react";

export default function EndGame() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <Link
        className="self-center"
        href="https://form.jotform.com/243245150113442"
      >
        <button className="px-4 py-3 bg-sky-200 text-black text-2xl rounded-lg">
          เริ่มตอบคำถาม
        </button>
      </Link>
    </div>
  );
}
