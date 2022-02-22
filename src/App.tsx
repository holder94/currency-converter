import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ConverterContainer as Converter } from './features/Converter/Converter';
import { CurrenciesContainer as Currencies } from './features/CurrenciesList/CurrenciesList';
import { Header } from './features/Header/Header';

export const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route component={Currencies} path='/' exact />
				<Route component={Converter} path='/converter' />
			</Switch>
		</div>
	);
};
