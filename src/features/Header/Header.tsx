import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
	background-color: grey;
`;

const StyledLink = styled.div`
	display: inline;
	& + & {
		margin-left: 10px;
	}
`;

export const Header: React.FC = () => {
	return (
		<StyledNav>
			<StyledLink>
				<NavLink to='/'>Currencies</NavLink>
			</StyledLink>
			<StyledLink>
				<NavLink to='/converter'>Converter</NavLink>
			</StyledLink>
		</StyledNav>
	);
};
