type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "Notebook", price: 3500 },
  { name: "Mouse", price: 120 },
  { name: "Teclado", price: 250 },
  { name: "Monitor", price: 900 },
];

export function calcularTotal(lista: Product[]): number {
  return lista.reduce(
    (acc: number, product: Product) => acc + product.price,
    0
  );
}

export function calcularMedia(lista: Product[]): number {
  const total: number = calcularTotal(lista);

  return total / lista.length;
}

export function produtoMaisCaro(lista: Product[]): Product {
  return lista.reduce((acc: Product, product: Product) =>
    product.price > acc.price ? product : acc
  );
}

export function aplicarDesconto(lista: Product[]): Product[] {
  return lista.map((product: Product) => ({
    ...product,
    price: product.price * 0.9,
  }));
}

console.log("Preço total:", calcularTotal(products));

console.log("Média:", calcularMedia(products));

console.log("Mais caro:", produtoMaisCaro(products));

console.log("Com desconto:", aplicarDesconto(products));    