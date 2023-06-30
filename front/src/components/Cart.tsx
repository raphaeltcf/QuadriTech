'use client';

import { styled } from 'styled-components';
import { ShoppingCart } from 'iconsax-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const CartCount = styled.span`
	background-color: var(--delete-color);
	color: white;
	border-radius: 100%;
	width: 17px;
	height: 17px;
	padding: 0px 5px;

	font-size: 0.8em;

	margin-left: -10px;
`;

const CartContainer = styled.div`
	position: relative;
`;

const Cart = () => {
	const { value } = useLocalStorage('cart-items', ['1', '1']);
	return (
		<CartContainer>
			<ShoppingCart
				size='24'
				color='#737380'
			/>
			{value.length > 0 && <CartCount>{value.length}</CartCount>}
		</CartContainer>
	);
};

export default Cart;
