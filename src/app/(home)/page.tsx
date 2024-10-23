import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";
export default function MovieSearch() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">HOME</h1>
        <nav>
          <ul className="flex space-x-4">
            {[
              "HOME",
              "NONE",
              "MOVIES",
              "GENERS",
              "OBNERS",
              "QENERS",
              "GENS",
            ].map((item) => (
              <li
                key={item}
                className={`${
                  item === "HOME" ? "border-b-2 border-red-500" : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
          {[1, 2, 3, 4, 5].map((movie) => (
            <div
              key={movie}
              className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={placeholder}
                alt={`Movie ${movie}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
