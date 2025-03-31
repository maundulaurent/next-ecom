async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul className="">
        {products.map((product) => (
          <li className="border-b border-gray-300 w-1/4" key={product._id.toString()}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}