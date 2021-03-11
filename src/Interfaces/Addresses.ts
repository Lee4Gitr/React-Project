export default interface Addresses {
  addresses: Array<address>;
}

interface address {
  street: string;
  city: string;
  state: string;
  zip: Number;
}
