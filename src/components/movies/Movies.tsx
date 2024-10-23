"use client";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";
import Link from "next/link";

// Function to fetch movies from our API route

export default function Movies({ movie }: any) {

  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group relative block bg-black"
    >
      <Image
        src={
          movie?.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie?.poster_path
            : placeholder
        }
        width={100}
        height={120}
        alt={`Movie `}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {movie?.release_date}
        </p>

        <p className="text-lg font-bold text-white sm:text-xl">
          {movie?.title}
        </p> */}

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-xl text-white">{movie?.title}</p>
          </div>
        </div>
      </div>
    </Link>
    // <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
    //   <Image
    //     src={
    //       movie?.poster_path
    //         ? "https://image.tmdb.org/t/p/w500" + movie?.poster_path
    //         : placeholder
    //     }
    //     alt={`Movie `}
    //     layout="fill"
    //     objectFit="cover"
    //   />
    // </div>
  );
}
