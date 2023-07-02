'use client';
import { useMemo, useEffect, useState } from 'react';
import { styled } from 'styled-components';

import {
	IProductList,
	ProductsService,
} from '@/services/products/ProductsService';
import { useDebounce } from '@/hooks/useDebounce';
import ProductCard from './ProductCard';
import { usePathname, useSearchParams } from 'next/navigation';

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 250px);
	grid-gap: 32px;
	max-width: 100%;

	margin-top: 32px;
`;

const ProductsList = () => {
	const { debounce } = useDebounce();
	const searchParams = useSearchParams();

	const [data, setData] = useState<IProductList[]>([]);
	const [totalCount, setTotalCount] = useState(0);

	const search = useMemo(() => {
		return searchParams.get('search') || '';
	}, [searchParams]);

	const page = useMemo(() => {
		return Number(searchParams.get('page')) || 1;
	}, [searchParams]);

	useEffect(() => {
		debounce(() => {
			ProductsService.getAll(page, search).then((result) => {
				if (result instanceof Error) {
					alert(result.message);
				} else {
					setTotalCount(result.totalCount);
					setData(result.data);
					console.log(result);
				}
			});
		});
	}, [debounce, search]);

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
