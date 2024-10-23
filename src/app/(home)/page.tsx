import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";
import Movie from "@/components/movies/Movie";
import Header from "@/components/common/Header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
export default function MovieSearch() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      {/* <Header /> */}

      {/* Hero Section */}
      <HeroSection />
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
          {[1, 2, 3, 4, 5].map((movie: Object) => (
            <Movie key={movie.toString()} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
