import { createStore } from 'redux';

import { currencyReducer } from './reducer';

export const store = createStore(currencyReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
