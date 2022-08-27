export interface SpreadsheetOptions {
  isUsingSimpleRow: boolean;
  isUsingMultipleRow: boolean;
  isUsingSimpleCol: boolean;
  isUsingMultipleCol: boolean;
  isUsingFiltering: boolean;
  isUsingSorting: boolean;
}

export interface SpreadsheetApiResponse {
  first_name: string;
  last_name: string;
  email: string;
  make: string;
  model: string;
  model_year: string;
  vin: string;
  date: string;
  color: string;
}
