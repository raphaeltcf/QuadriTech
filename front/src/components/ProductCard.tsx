'use client';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

import { IProductList } from '@/services/products/ProductsService';

const Card = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	cursor: pointer;

	border-radius: 4px;
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(10px);
	padding: 0 8px;
	overflow: hidden;

	width: 256px;

	img {
		width: 256px;
		height: 300px;
	}

	h3 {
		color: rgba(0, 0, 0, 0.705);
		margin: 5px 0;
		font-size: 15px;
	}

	p {
		color: var(--shapes-dark);
		font-size: 14px;
		font-weight: 600;
		margin: 5px 0;
	}

	div {
		width: 95%;
		display: flex;
		align-items: start;
		justify-content: center;
		flex-direction: column;
	}
`;
const Line = styled.div`
	width: 90%;
	height: 1px;
	background-color: var(--shapes);
	padding: 0;
	border-radius: 0px 0px 4px 4px;
`;
const ProductCard = (props: IProductList) => {
	const router = useRouter();

	const handleNavigate = () => {
		router.push(`/product?id=${props.id}`);
	};

	return (
		<Card onClick={handleNavigate}>
			<img src={props.image} />
			<div>
				<h3>{props.name}</h3>
				<Line></Line>
				<p>R$ {props.price}</p>
			</div>
		</Card>
	);
};

export default ProductCard;
