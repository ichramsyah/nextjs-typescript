import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json({ message: 'nama dan pesan wajib diisi' }, { status: 400 });
    }

    console.log(`Pesan diterima dari ${name}: ${message}`);

    return NextResponse.json({
      message: 'Pesan Anda telah berhasil dikirim!',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}
