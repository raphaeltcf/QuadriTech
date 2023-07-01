import styled from 'styled-components';
import { Trash } from 'iconsax-react';
import Image from 'next/image';

interface ICartItem {}

const Item = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 210px;

	border-radius: 8px;
	overflow: hidden;
	background-color: white;

	img {
		max-height: 100%;
	}

	> div {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		padding: 16px 24px;
		color: var(--text-dark-2);
		line-height: 150%;

		h4 {
			font-size: 20px;
			font-weight: 300;
		}

		button {
			position: absolute;
			right: 24px;
			cursor: pointer;
			border: 0;
			background: transparent;
		}

		p {
			font-size: 12px;
			max-height: 40%;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			overflow: hidden;
			-webkit-box-orient: vertical;
		}

		div {
			display: flex;
			align-items: center;
			justify-content: space-between;

			span {
				color: var(--shapes-dark);
				font-size: 16px;
				font-weight: 600;
			}
		}
	}
`;

const SelectQuantity = styled.select`
	font-family: inherit;
	padding: 8px;
	border: 1px solid #a8a8b3;
	border-radius: 8px;
	background-color: var(--bg-secondary);
	color: var(--text-dark);
	font-size: 16px;
`;

const CartItem = (props: ICartItem) => {
	return (
		<Item>
			<Image
				src='https://fakeimg.pl/256x211'
				width={256}
				height={211}
				alt='Picture of the author'
			/>
			<div>
				<h4>Caneca de cerâmica rústica</h4>

				<button>
					<Trash
						size='24'
						color='var(--delete-color'
					/>
				</button>
				<p>
					Aqui vem um texto descritivo do produto, esta caixa de texto servirá
					apenas de exemplo para que simule algum texto que venha a ser inserido
					nesse campo, descrevendo tal produto.
				</p>
				<div>
					<SelectQuantity>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</SelectQuantity>
					<span>R$ 50,00 </span>
				</div>
			</div>
		</Item>
	);
};

export default CartItem;
