import Item from "./Item";
import Required from "./Required";

export default interface ProductDescription {
  productDetails: Array<Item>;
  required?: Required;
}

