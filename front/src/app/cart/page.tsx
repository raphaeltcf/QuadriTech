'use client';
import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { BackButton } from '@/components/BackButton';
import { styled } from 'styled-components';
import { IProductInCart } from '@/services/api/products/ProductsService';
import CartItem from '@/components/Cart/CartItem';
import { formatPrice } from '@/utils/format-price';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 32px;

	@media (min-width: 1068px) {
		flex-direction: row;
	}
`;

const CartListContainer = styled.div`
	h3 {
		font-size: 24px;
		font-weight: 500;
		text-transform: uppercase;
		color: var(--text-dark-2);
		line-height: 150%;
		margin-top: 24px;
	}

	p {
		color: var(--text-dark-2);
		font-weight: 300;
		line-height: 150%;
		font-size: 16px;

		span {
			font-weight: 600;
			margin-left: 5px;
		}
	}
`;

const CartList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 16px;
	margin-top: 24px;
`;

const CartResultContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	background-color: white;
	height: 100%;
	min-width: 352px;
	padding: 16px 24px;

	h3 {
		color: var(--textos-dark-2);
		font-size: 20px;
		font-weight: 600;
		line-height: 150%;
		text-transform: uppercase;
		margin-bottom: 20px;
	}
`;

const TotalItem = styled.div<{ bold: number }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	font-weight: ${(props) => (props.bold === 1 ? '600' : '400')};
	font-size: 16px;
	line-height: 150%;
	margin-bottom: 12px;
`;

const Divider = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-bottom: 12px;
	height: 1px;
	background-color: var(--shapes);
	padding: 0;
	border-radius: 0px 0px 4px 4px;
`;

const ShopBtn = styled.button`
	font-family: inherit;
	color: white;
	border-radius: 4px;
	background: #51b853;
	padding: 12px;
	width: 100%;
	border: none;
	margin-top: 40px;
	cursor: pointer;

	font-size: 16px;
	font-weight: 500;
	line-height: 150%;
	text-transform: uppercase;
`;

const CartPage = () => {
	const { value, updateLocalStorage } = useLocalStorage<IProductInCart[]>(
		'cart-items',
		[]
	);

	const calculateTotal = (value: IProductInCart[]) => {
		console.log(value);
		return value.reduce(
			(sum, item) => (sum += item.price * item.cart_quantity),
			0
		);
	};

	const cartTotal = formatPrice(calculateTotal(value));
	const cartTotalWithDelivery = formatPrice(calculateTotal(value) + 1200);

	const handleUpdateQuantity = (id: string, cart_quantity: number) => {
		const newValue = value.map((item) => {
			if (item._id !== id) return item;
			return { ...item, cart_quantity };
		});
		updateLocalStorage(newValue);
	};

	const handleDeleteItem = (id: string) => {
		const newValue = value.filter((item) => {
			if (item._id !== id) return item;
		});
		updateLocalStorage(newValue);
	};

	return (
		<DefaultPageLayout>
			<Container>
				<CartListContainer>
					<BackButton navigate='/' />
					<h3>Seu Carrinho</h3>
					<p>
						Total ({value.length} Produtos)
						<span>{cartTotal}</span>
					</p>
					<CartList>
						{value.map((item) => (
							<CartItem
								product={item}
								key={item._id}
								handleDelete={handleDeleteItem}
								handleUpdateQuantity={handleUpdateQuantity}
							/>
						))}
					</CartList>
				</CartListContainer>
				<CartResultContainer>
					<h3>Resumo do Pedido</h3>
					<TotalItem bold={0}>
						<p>Subtotal de produtos</p>
						<p>{cartTotal}</p>
					</TotalItem>
					<TotalItem bold={0}>
						<p>Entrega</p>
						<p>R$ 40,00</p>
					</TotalItem>
					<Divider />
					<TotalItem bold={1}>
						<p>Total</p>
						<p>{cartTotalWithDelivery}</p>
					</TotalItem>

					<ShopBtn>Finalizar a compra</ShopBtn>
				</CartResultContainer>
			</Container>
		</DefaultPageLayout>
	);
};

export default CartPage;
