import { NextResponse } from "next/server";

const API_KEY = process.env.TMDB_API_KEY;
const API_URL = process.env.API_URL;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const url = `${API_URL}search/movie?api_key=${API_KEY}&query=${query}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
