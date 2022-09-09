export interface HeadModel {
  text: string;
  value: string;
}

export interface TableApiResponse {
  id: number;
  uid: string;
  account_number: string;
  iban: string;
  bank_name: string;
  routing_number: string;
  swift_bic: string;
}
