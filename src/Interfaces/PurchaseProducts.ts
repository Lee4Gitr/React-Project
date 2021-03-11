import Code from "./Code";

export default interface PurchaseProducts {
  PurchaseProducts: Array<PurchaseProduct>
}

interface PurchaseProduct {
  code: Code;
  quantity: Number;
}
