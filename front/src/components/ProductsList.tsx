'use client';
import { useMemo, useEffect, useState, ChangeEvent } from 'react';
import { styled } from 'styled-components';

import {
	IProductList,
	ProductsService,
} from '@/services/products/ProductsService';
import { useDebounce } from '@/hooks/useDebounce';
import ProductCard from './ProductCard';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Pagination from '@/components/Pagination';
import { useParams } from '@/hooks/useParams';

const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 250px);
	grid-gap: 32px;
	max-width: 100%;
`;

const ProductsList = () => {
	const { debounce } = useDebounce();
	const searchParams = useSearchParams();
	const { createQueryString } = useParams();

	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (page: string) => {
		const totalPages = Math.ceil(
			totalCount / Number(process.env.NEXT_PUBLIC_PAGE_LIMIT)
		);

		if (totalPages >= Number(page) && Number(page) > 0) {
			router.push(pathname + '?' + createQueryString('page', page));
		}
	};
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
	}, [debounce, search, page]);

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
