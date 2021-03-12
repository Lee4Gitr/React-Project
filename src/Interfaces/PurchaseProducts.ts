export default interface PurchaseProducts {
  PurchaseProducts: Array<PurchaseProduct>
}

interface PurchaseProduct {
  code: number;
  quantity: number;
}
