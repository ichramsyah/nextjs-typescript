// src/app/api/hello/route.ts
import { NextResponse, NextRequest } from 'next/server';

// Menangani permintaan GET
export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Ini adalah respons GET' });
}

// Menangani permintaan POST
export async function POST(request: NextRequest) {
  const data = await request.json();

  console.log('data diterima', data);

  return NextResponse.json({
    message: 'Data berhasil diterima!',
    dataYangDikirim: data,
  });
}
