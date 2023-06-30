'use client';
import ProductsList from '@/components/ProductsList';
import FilterBar from '@/components/FilterBar';
import styled from 'styled-components';

const PageWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 34px 2em;
	min-height: calc(100vh - 100px);
	background-color: var(--bg-primary);
`;

export default function Home() {
	return (
		<PageWrapper>
			<FilterBar />
			<ProductsList />
		</PageWrapper>
	);
}
