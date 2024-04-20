"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundImage() {
  const [imageSrc, setImageSrc] = useState("/bg_1.jpg");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      setImageSrc(`/bg_${randomNumber}.jpg`);
    }, 7000);
    return () => clearInterval(interval);
  });

  return (
    <div className="absolute z-0 h-full w-full">
      <Image
        alt="Background Image"
        className="animate-[pulse_1s_linear]"
        fill
        key={imageSrc}
        priority
        src={imageSrc}
        style={{ objectFit: "cover" }}
      />
      <div className="absolute h-full w-full bg-transparent dark:bg-gray-950 dark:opacity-75" />
    </div>
  );
}
