import { fetchCurrencies } from '../api/fetchCurrencies';

export async function loadCurrencies() {
	const data = await fetchCurrencies();
	return {
		type: 'UPDATE_LIST',
		payload: data.data,
	};
}
