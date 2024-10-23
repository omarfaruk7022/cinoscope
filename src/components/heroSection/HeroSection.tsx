import React from "react";
import placeholder from "@/public/images/hero.webp";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";

interface HeroSectionProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  handleSearch: (e: React.FormEvent) => void;
}
export default function HeroSection({
  setSearchQuery,
  searchQuery,
  handleSearch,
}: HeroSectionProps) {
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
        <form className="flex justify-center" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Movie Movies"
            className="px-4 py-2 w-96 rounded-l-full text-gray-900"
          />
          <button type="submit" className="bg-red-500 px-6 py-2 rounded-r-full">
            <IoSearchSharp className="w-6 h-6" />
          </button>
        </form>
      </div>
    </section>
  );
}
