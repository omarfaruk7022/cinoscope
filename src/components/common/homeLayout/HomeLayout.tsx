"use client";
import HeroSection from "@/components/heroSection/HeroSection";
import Movies from "@/components/movies/Movies";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  // Add other fields as needed
}
async function fetchMovies(query: string) {
  const response = await fetch(
    `/api/movies?query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
export default function HomeLayout() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, error, refetch } = useQuery({
    queryKey: ["movies", searchQuery],
    queryFn: () => fetchMovies(searchQuery),
    enabled: false, // Don't run the query automatically
  });

  console.log(error);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      refetch();
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Header */}
      {/* <Header /> */}

      {/* Hero Section */}
      <HeroSection
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
      {/* Categories */}
      <section className="flex justify-center space-x-8 my-8">
        {["HOME", "POPULAR", "GENERS"].map((category) => (
          <button key={category} className="text-xl font-semibold">
            {category}
          </button>
        ))}
      </section>

      {/* Movie Grid */}
      <section className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-6">HOME</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data?.results?.map((movie: Movie) => (
            <Movies movie={movie} key={movie?.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
