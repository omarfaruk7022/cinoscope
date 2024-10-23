"use client";
import React from "react";
import placeholder from "@/public/images/placeholder.svg";
import Image from "next/image";

interface MovieProps {
  movie: object;
}
export default function Movie({ movie }: MovieProps) {
  return (
    <div>
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={placeholder}
          alt={`Movie `}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
