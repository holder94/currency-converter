import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchCurrency } from '../../api/fetchCurrency';

import { loadCurrencies } from '../../redux/actions';
import { RootState, AppDispatch } from '../../redux/store';

type ConverterProps = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

const Wrapper = styled.div`
	width: 70%;
	margin: 10px auto;
	box-shadow: rgba(31, 31, 31, 0.15) 0px 4px 20px -2px;
`;

const StyledSelect = styled.select`
	& + & {
		margin-left: 10px;
	}
`;

const StyledOption = styled.option``;

const StyledInput = styled.input`
	margin-left: 10px;
`;

interface IPrices {
	usd: number;
	btc: number;
	eth: number;
}

export const Converter: React.FC<ConverterProps> = ({
	list,
	loadCurrencies,
}) => {
	const [currencyId, setCurrencyId] = useState<string>('1');
	const [selectedCoin, setSelectedCoin] = useState<string>('BTC');
	const [prices, setPrices] = useState<IPrices | undefined>();
	const [price, setPrice] = useState<number | undefined>();
	const [amount, setAmount] = useState<number>(1);

	const handleChange: React.ChangeEventHandler<HTMLSelectElement> = useCallback(
		(e) => {
			setCurrencyId(e.target.value);
		},
		[]
	);

	const handleChangeCoin = useCallback((coin: string) => {
		setSelectedCoin(coin);
	}, []);

	const handleChangeAmount: React.ChangeEventHandler<HTMLInputElement> =
		useCallback((e) => {
			setAmount(Number(e.target.value));
		}, []);

	const handleChangeConvertCoin: React.ChangeEventHandler<HTMLSelectElement> =
		useCallback((e) => {
			setPrice(Number(e.target.value));
		}, []);

	useEffect(() => {
		loadCurrencies();
	}, [loadCurrencies]);

	useEffect(() => {
		if (currencyId) {
			fetchCurrency(currencyId).then((data) => {
				const { USD, BTC, ETH } = data.data.values;
				setPrices({
					usd: USD.price,
					btc: BTC.price,
					eth: ETH.price,
				});
				setPrice(USD.price);
			});
		}
	}, [currencyId]);

	return (
		<Wrapper>
			<StyledSelect onChange={handleChange} value={currencyId}>
				{list.map((item, index) => (
					<StyledOption
						key={index}
						value={item.id}
						onClick={handleChangeCoin.bind(null, item.symbol)}
					>
						{item.name}
					</StyledOption>
				))}
			</StyledSelect>
			{prices && (
				<StyledSelect onChange={handleChangeConvertCoin} value={price}>
					<StyledOption value={prices.usd}>USD</StyledOption>
					<StyledOption value={prices.btc}>BTC</StyledOption>
					<StyledOption value={prices.eth}>ETH</StyledOption>
				</StyledSelect>
			)}
			<StyledInput
				type='number'
				value={parseInt(amount.toString(), 10)}
				onChange={handleChangeAmount}
			/>{' '}
			Amount
			{price && (
				<div>
					{amount} {selectedCoin} ={' '}
					{Math.round(amount * price) || amount * price}
				</div>
			)}
		</Wrapper>
	);
};

const mapStateToProps = (state: RootState) => ({
	list: state.list,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	loadCurrencies: async () => dispatch(await loadCurrencies()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const ConverterContainer = connector(Converter);
