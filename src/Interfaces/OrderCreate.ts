import CustomerName from "./CustomerName";
import Email from "./Email";
import PhoneNumbers from "./PhoneNumbers";
import Addresses from "./Addresses";
import PurchaseProducts from "./PurchaseProducts";

export default interface OrderCreate {
  customerName: CustomerName;
  customerEmail: Email;
  customerPhone: PhoneNumbers;
  shippingAddress: Addresses;
  billingAddress: Addresses;
  purchaseProducts: PurchaseProducts;
}
