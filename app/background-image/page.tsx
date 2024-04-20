"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundImage() {
  const [imageSrc, setImageSrc] = useState("/bg_1.jpg");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      setImageSrc(`/bg_${randomNumber}.jpg`);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <Image
      alt="Background Image"
      className="animate-[pulse_1s_linear]"
      fill
      key={imageSrc}
      priority
      src={imageSrc}
      style={{ objectFit: "cover" }}
    />
  );
}
