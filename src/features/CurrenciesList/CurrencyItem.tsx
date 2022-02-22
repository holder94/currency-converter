import React from 'react';
import styled from 'styled-components';
import { ICurrency } from '../../redux/types';

const StyledTr = styled.tr`
  border: 1px solid black;

  &:hover {
    background-color: rgba(197, 196, 197, 0.7);
  }
`;

const StyledTd = styled.td`
  padding: 2px 10px;
`;

const StyledFragment = styled.div`
  display: inline;
  font-size: 10px;
  color: grey;
`;

interface CurrencyItemProps {
  item: ICurrency;
}

export const CurrencyItem: React.FC<CurrencyItemProps> = ({ item }) => {
  const { price, marketCap } = item.values.USD;

  return (
    <StyledTr>
      <StyledTd>
        {item.name}&nbsp;
        <StyledFragment>{item.symbol}</StyledFragment>
      </StyledTd>
      <StyledTd>{Math.round(price) || price} $</StyledTd>
      <StyledTd>{item.circulatingSupply}</StyledTd>
      <StyledTd>{Math.round(marketCap / 1e9)}B</StyledTd>
      <StyledTd>{item.category}</StyledTd>
    </StyledTr>
  );
};
