import { TOKEN } from "./token";
import { Fetcher } from "./fetcher"
import { ICurrencyExtended } from "../redux/types";

export function fetchCurrency(id: string): Promise<{ data: ICurrencyExtended }> {
    const url = `https://api.cryptorank.io/v1/currencies/${id}?api_key=${TOKEN}`
    return Fetcher(url);
}
