import { NextResponse } from "next/server";
//buscar nextjs route handlers

console.log(process.env.TOKEN);
export async function GET() {
  const res = await fetch("https:/jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json({ data });
}

export async function POST(request) {
  // const data = await request.json();
  const { nombre, apellido } = await request.json();

  return NextResponse.json({
    message: "Creando datos!",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "actualizando datos!",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Eliminando datos!",
  });
}
