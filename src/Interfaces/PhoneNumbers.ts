export default interface PhoneNumbers {
  phoneNumbers: Array<PhoneNumber>
}

interface PhoneNumber {
  number: number;
  type: string;
  contact: boolean;
}
