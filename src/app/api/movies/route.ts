import { NextResponse } from "next/server";

const API_KEY = process.env.TMDB_API_KEY;
const API_URL = process.env.API_URL;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  let url;

  url = `${API_URL}search/movie?api_key=${API_KEY}&query=${query}`;

  console.log(url);
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
