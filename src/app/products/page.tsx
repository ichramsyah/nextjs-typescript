interface Product {
  id: number;
  title: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products', { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error('Failed fetch data');
  }
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {`$${product.price}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
