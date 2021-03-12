import ProductType from "./ProductType";
import Category from "./Category";

export default interface Item {
  name: string;
  code: number;
  productType: ProductType;
  cost: string;
  description: string;
  pushedProduct: boolean;
  callback: string;
  category: Category;
}
