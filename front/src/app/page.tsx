'use client';
import ProductsList from '@/components/ProductsList';
import FilterBar from '@/components/FilterBar';
import styled from 'styled-components';
import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import Image from 'next/image';

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
