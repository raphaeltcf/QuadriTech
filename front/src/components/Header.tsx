'use client';

import { styled } from 'styled-components';
import { PrimaryInputWIcon } from './PrimaryInput';
import Cart from './Cart';
import { ProfileCircle } from 'iconsax-react';

interface IHeaderProps {}

const TagHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1em 2em;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;

		svg {
			cursor: pointer;
		}
	}
`;

const Logo = styled.a`
	color: var(--logo--color);
	font-weight: bolder;
	font-size: 1.5em;
	cursor: pointer;
`;

const Header = (props: IHeaderProps) => {
	return (
		<TagHeader>
			<Logo>QUADRITECH</Logo>
			<div>
				<PrimaryInputWIcon placeholder='Procurando por algo específico?' />
				<Cart />
				<ProfileCircle
					size='24'
					color='var(--text-dark)'
				/>
			</div>
		</TagHeader>
	);
};

export default Header;
