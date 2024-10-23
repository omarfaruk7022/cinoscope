import React from "react";
import placeholder from "@/public/images/hero.webp";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src={placeholder}
        alt="Movie backdrop"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-bold mb-4">MOVIE SEARCH</h2>
        <p className="text-xl mb-8">Find your favorite movies</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search Movie Movies"
            className="px-4 py-2 w-96 rounded-l-full text-gray-900"
          />
          <button className="bg-red-500 px-6 py-2 rounded-r-full">
            {/* <Search className="w-6 h-6" /> */}
          </button>
        </div>
      </div>
    </section>
  );
}
