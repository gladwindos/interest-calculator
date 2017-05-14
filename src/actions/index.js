import axios from 'axios';

export const FETCH_CURRENCY = 'FETCH_CURRENCY';

export function fetchCurrency() {
  const url = 'http://localhost:8080/currencies';

  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_CURRENCY,
    payload: request
  };
}
