import { TOKEN } from "./token";
import { Fetcher } from "./fetcher"
import { ICurrency } from "../redux/types";

const url = `https://api.cryptorank.io/v1/currencies/?api_key=${TOKEN}`

export function fetchCurrencies(): Promise<{ data: ICurrency[] }> {
    return Fetcher(url);
}
