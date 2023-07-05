'use client';

import {
	IProductList,
	ProductsService,
} from '@/services/api/products/ProductsService';
import { useMemo, useEffect, useState } from 'react';
import Pagination from '@/components/Pagination';
import { useSearchParams } from 'next/navigation';
import { styled } from 'styled-components';

import { PriorityType } from '@/types/PriorityTypes';
import { useDebounce } from '@/hooks/useDebounce';
import { FilterType } from '@/types/FilterTypes';
import { useParams } from '@/hooks/useParams';
import ProductCard from './ProductCard';

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 250px);
	grid-gap: 32px;
	max-width: 100%;
`;

const ProductsList = () => {
	const { debounce } = useDebounce();
	const searchParams = useSearchParams();
	const { changeURL } = useParams();

	const [data, setData] = useState<IProductList[]>([]);
	const [totalCount, setTotalCount] = useState(0);

	const search = useMemo(() => {
		return searchParams.get('search') || '';
	}, [searchParams]);

	const page = useMemo(() => {
		return Number(searchParams.get('page')) || 1;
	}, [searchParams]);

	const type = useMemo(() => {
		return searchParams.get('type') || FilterType.ALL;
	}, [searchParams]);

	const priority = useMemo(() => {
		return searchParams.get('priority') || PriorityType.NEWS;
	}, [searchParams]);

	const handleChange = (page: string) => {
		const totalPages = Math.ceil(
			totalCount / Number(process.env.NEXT_PUBLIC_PAGE_LIMIT)
		);

		if (totalPages >= Number(page) && Number(page) > 0) {
			changeURL('page', page);
		}
	};
	useEffect(() => {
		debounce(() => {
			ProductsService.getAll(
				page,
				search,
				type as FilterType,
				priority as PriorityType
			).then((result) => {
				if (result instanceof Error) {
					alert(result.message);
				} else {
					setTotalCount(result.totalCount);
					setData(result.data);
				}
			});
		});
	}, [debounce, search, page, type, priority]);

	return (
		<>
			<Pagination
				count={Math.ceil(
					totalCount / Number(process.env.NEXT_PUBLIC_PAGE_LIMIT)
				)}
				page={page}
				onChange={handleChange}
			/>
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
		</>
	);
};

export default ProductsList;
