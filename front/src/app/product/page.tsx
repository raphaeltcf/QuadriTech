'use client';
import { BackButton } from '@/components/BackButton';
import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import { ShoppingBag } from 'iconsax-react';
import Image from 'next/image';
import { styled } from 'styled-components';

interface ProductProps {}

const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;

	section {
		display: flex;
		justify-content: center;
		width: 100%;
		gap: 32px;
		margin-top: 24px;

		img {
			border-radius: 5px;
			max-width: 640px;
			width: 50%;
		}

		> div {
			display: flex;
			justify-content: space-between;
			flex-direction: column;

			button {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 12px;

				font-family: inherit;
				border-radius: 4px;
				background-color: #115d8c;
				color: white;
				border: none;
				cursor: pointer;
				padding: 10px 0;
				text-align: center;
				font-weight: 500;
				font-size: 16px;
				text-transform: uppercase;
			}

			button:hover {
				opacity: 0.7;
			}
		}
	}
`;

const ProductInfo = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;

	span {
		font-weight: 400;
		font-size: 16px;
		color: var(--text-dark-2);
	}

	h2 {
		font-size: 32px;
		font-weight: 300;
		margin-top: 12px;
		color: var(--text-dark-2);
	}

	span:nth-of-type(2) {
		font-size: 20px;
		font-weight: 700;
		color: var(--shapes-dark);
		margin-top: 5px;
		margin-bottom: 24px;
	}

	p {
		color: var(--textos-dark);
		font-size: 12px;
		line-height: 150%;
	}

	div {
		h3 {
			color: var(--textos-dark);
			font-size: 16px;
			font-weight: 500;
			text-transform: uppercase;
			margin-top: 40px;
		}

		p {
			margin-top: 8px;
			font-size: 14px;
			color: var(--text-dark-2);
			max-width: 448px;
		}
	}
`;

const Product = ({ searchParams }: { searchParams: { id: string } }) => {
	console.log(searchParams);
	const id = searchParams.id;

	const data: { id: string; price: string } = { id: '2', price: '100' };

	const handleAddToCart = () => {
		let cartItems = localStorage.getItem('cart-items');
		if (cartItems) {
			let cartItemsArray = JSON.parse(cartItems);

			let existingProductIndex = cartItemsArray.findIndex(
				(item: { id: string }) => item.id === id
			);

			if (existingProductIndex !== -1) {
				cartItemsArray[existingProductIndex].quantity += 1;
			} else {
				cartItemsArray.push({ ...data, id, quantity: 1 });
			}
			localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
		} else {
			const newCart = [{ ...data, quantity: 1, id }];
			localStorage.setItem('cart-items', JSON.stringify(newCart));
		}
	};

	return (
		<DefaultPageLayout>
			<Container>
				<BackButton navigate='/' />
				<section>
					<Image
						src='https://fakeimg.pl/640x640'
						width={400}
						height={400}
						alt='Picture of the author'
					/>
					<div>
						<ProductInfo>
							<span> Caneca</span>
							<h2> Caneca de cerâmica rústica</h2>
							<span>R$ 40,00</span>
							<p>
								*Frete de R$40,00 para todo o Brasil. Grátis para compras acima
								de R$900,00.
							</p>
							<div>
								<h3>Descrição</h3>
								<p>
									Aqui vem um texto descritivo do produto, esta caixa de texto
									servirá apenas de exemplo para que simule algum texto que
									venha a ser inserido nesse campo, descrevendo tal produto.
								</p>
							</div>
						</ProductInfo>
						<button onClick={handleAddToCart}>
							<ShoppingBag
								size='24'
								color='#fff'
							/>
							Adicionar ao carrinho
						</button>
					</div>
				</section>
			</Container>
		</DefaultPageLayout>
	);
};

export default Product;
