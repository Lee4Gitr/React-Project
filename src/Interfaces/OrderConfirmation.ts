import CustomerName from "./CustomerName";
import Email from "./Email";
import PhoneNumbers from "./PhoneNumbers";
import PurchaseProducts from "./PurchaseProducts";
import OrderTotal from "./OrderTotal";

export default interface OrderConfirmation {
  id: string;
  customerName: CustomerName;
  customerEmail: Email;
  customerPhoneNumbers: PhoneNumbers;
  purchaseProducts: PurchaseProducts;
  orderTotal: OrderTotal;
}
