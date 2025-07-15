import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const productId = params.id;

  const productData = {
    id: productId,
    name: `produk ${productId}`,
    price: Math.floor(Math.random() * 1000),
  };

  return NextResponse.json(productData);
}
