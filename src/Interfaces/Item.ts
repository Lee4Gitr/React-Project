import Code from "./Code";
import ProductType from "./ProductType";
import Category from "./Category";

export default interface Item {
  name: string;
  code: Code;
  productType: ProductType;
  cost: Number;
  description: string;
  pushedProduct: boolean;
  callback: string;
  category: Category;
}
