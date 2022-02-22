import { ICurrency, IAction } from './types';

interface ICurrencyReducerState {
	list: ICurrency[];
}

const initialState = {
	list: [],
};

export const currencyReducer = (
	state: ICurrencyReducerState = initialState,
	action: IAction<ICurrency[]>
) => {
	switch (action.type) {
		case 'UPDATE_LIST':
			return {
				list: action.payload,
			};
		default: {
			return state;
		}
	}
};
