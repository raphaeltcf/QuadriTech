'use client';
import styled from 'styled-components';
import Image from 'next/image';

import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import ProductsList from '@/components/ProductsList';
import FilterBar from '@/components/FilterBar';

const PageWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function Home() {
	return (
		<DefaultPageLayout>
			<PageWrapper>
				<FilterBar />
				<ProductsList />
			</PageWrapper>
		</DefaultPageLayout>
	);
}
