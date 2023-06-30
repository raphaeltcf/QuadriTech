'use client';
import Image from 'next/image';
import { styled } from 'styled-components';

interface IProductCardProps {}

const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	border-radius: 4px;
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(10px);
	padding: 0 8px;
	overflow: hidden;

	width: 256px;

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

const ProductCard = (props: IProductCardProps) => {
	return (
		<Card>
			<Image
				src='https://fakeimg.pl/400x400'
				width={256}
				height={300}
				alt='Picture of the author'
			/>
			<div>
				<h3>Caneca de cerâmica rústica</h3>
				<Line></Line>
				<p>R$ 40,00</p>
			</div>
		</Card>
	);
};

export default ProductCard;
