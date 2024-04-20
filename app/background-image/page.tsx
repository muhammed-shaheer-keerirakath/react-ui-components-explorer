"use client";

import Image from "next/image";

export default function BackgroundImage() {
  const imageNumber = Math.floor(Math.random() * 6 + 1);
  console.log(">>>", imageNumber);

  return (
    <Image
      src={`/bg_${imageNumber}.jpg`}
      fill
      placeholder="blur"
      blurDataURL="/bg_1.jpg"
      alt={`Background Image ${imageNumber}`}
      style={{ objectFit: "cover" }}
      priority
    />
  );
}
