import Code from "./Code";

export default interface ProductList {
  products: Array<product>;
}

interface product {
  name: string;
  code: Code;
  cost: Number;
  description: string;
  inventory: Number;
}
