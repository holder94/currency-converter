export interface ICurrency {
	category: string;
	circulatingSupply: number;
	id: number;
	name: string;
	symbol: string;
	values: {
		USD: {
			price: number;
			marketCap: number;
		};
	};
}

export interface ICurrencyExtended {
	category: string;
	circulatingSupply: number;
	id: number;
	name: string;
	symbol: string;
	values: {
		USD: {
			price: number;
			marketCap: number;
		};
    BTC: {
			price: number;
			marketCap: number;
		};
    ETH: {
			price: number;
			marketCap: number;
		};
	};
}

export interface IAction<T> {
	type: string;
	payload: T;
}
