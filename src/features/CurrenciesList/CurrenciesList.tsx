import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { RootState, AppDispatch } from '../../redux/store';
import { loadCurrencies } from '../../redux/actions';
import { CurrencyItem } from './CurrencyItem';

const CurrenciesBody = styled.div`
  width: 70%;
  min-width: 900px;
  margin: 10px auto;
  box-shadow: 0 0 1px black;
`;

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const StyledTr = styled.tr`
  box-shadow: 0 2px 2px black;
`;

const StyledTd = styled.td`
  padding: 5px 10px;
  font-weight: bold;
  font-size: 15px;
`;

type CurrenciesProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Currencies: React.FC<CurrenciesProps> = ({ list, loadCurrencies }) => {
  useEffect(() => {
    loadCurrencies();
  }, [loadCurrencies]);

  return (
    <CurrenciesBody>
      <StyledTable>
        <StyledTr>
          <StyledTd>Name</StyledTd>
          <StyledTd>Price</StyledTd>
          <StyledTd>Circ.Supply</StyledTd>
          <StyledTd>Market Cap</StyledTd>
          <StyledTd>Category</StyledTd>
        </StyledTr>
        {list.map((item, index) => (
          <CurrencyItem key={index} item={item} />
        ))}
      </StyledTable>
    </CurrenciesBody>
  );
};

const mapStateToProps = (state: RootState) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadCurrencies: async () => dispatch(await loadCurrencies()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export const CurrenciesContainer = connector(Currencies);
