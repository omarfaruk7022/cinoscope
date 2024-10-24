import { NextResponse } from "next/server";

const API_KEY = process.env.TMDB_API_KEY;
const API_URL = process.env.API_URL;

export async function GET() {
  const url = `${API_URL}/movie/popular?api_key=${API_KEY}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
