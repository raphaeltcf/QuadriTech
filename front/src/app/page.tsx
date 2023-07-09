'use client';
import styled from 'styled-components';

import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import ProductsList from '@/components/ProductsList';
import FilterBar from '@/components/FilterBar';
import '@/utils/TraducoesYup';

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
