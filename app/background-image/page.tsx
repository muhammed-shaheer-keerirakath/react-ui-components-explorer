"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundImage() {
  const imageNumber = Math.floor(Math.random() * 6 + 1);
  const [imageSrc, setImageSrc] = useState("/bg_1.jpg");

  useEffect(() => {
    setImageSrc(`/bg_${imageNumber}.jpg`);
  }, [imageNumber]);

  return (
    <Image
      src={imageSrc}
      fill
      placeholder="blur"
      blurDataURL="/bg_1.jpg"
      alt={`Background Image ${imageNumber} ${imageSrc}`}
      style={{ objectFit: "cover" }}
      priority
    />
  );
}
