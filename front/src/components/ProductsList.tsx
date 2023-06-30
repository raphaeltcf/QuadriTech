'use client';
import { styled } from 'styled-components';
import ProductCard from './ProductCard';

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 250px);
	grid-gap: 32px;
	max-width: 100%;

	margin-top: 32px;
`;

const ProductsList = () => {
	return (
		<ListContainer>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</ListContainer>
	);
};

export default ProductsList;
