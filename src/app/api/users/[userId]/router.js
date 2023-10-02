import { NextResponse } from "next/server";
//buscar nextjs route handlers
export async function GET(request, { params }) {
  console.log(params);
  const { searchParams } = new URL(request.url);

  const res = await fetch(
    `https:/jsonplaceholder.typicode.com/users${params.userId}`
  );
  const data = await res.json();
  return NextResponse.json({ data });
}
