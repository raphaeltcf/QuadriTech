'use client';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import {
	IProductList,
	ProductsService,
} from '@/services/products/ProductsService';
import ProductCard from './ProductCard';

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 250px);
	grid-gap: 32px;
	max-width: 100%;

	margin-top: 32px;
`;

const ProductsList = () => {
	const [data, setData] = useState<IProductList[]>([]);
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		ProductsService.getAll().then((result) => {
			if (result instanceof Error) {
				alert(result.message);
			} else {
				setTotalCount(result.totalCount);
				setData(result.data);
				console.log(result);
			}
		});
	}, []);

	return (
		<ListContainer>
			{data?.map((product) => (
				<ProductCard
					key={product.id}
					id={product.id}
					image={product.image}
					name={product.name}
					price={product.price}
				/>
			))}
		</ListContainer>
	);
};

export default ProductsList;
