'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ShoppingCart } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const CartCount = styled.span`
	background-color: var(--delete-color);
	color: white;
	border-radius: 100%;
	width: 17px;
	height: 17px;
	padding: 0px 6px;

	font-size: 0.8em;

	margin-left: -10px;
	margin-bottom: -10px;
`;

const CartContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

const Cart = () => {
	const router = useRouter();

	const { value } = useLocalStorage('cart-items', []);

	const handleNavigateToCart = () => {
		router.push('/cart');
	};

	return (
		<CartContainer onClick={handleNavigateToCart}>
			<ShoppingCart
				size='24'
				color='var(--text-dark)'
			/>
			{value.length > 0 && <CartCount>{value.length}</CartCount>}
		</CartContainer>
	);
};

export default Cart;
