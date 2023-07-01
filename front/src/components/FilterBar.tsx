'use client';
import FilterByPriority from './FilterByPriority';
import FilterByProduct from './FilterByProduct';
import styled from 'styled-components';

interface IFilterBarProps {}

const FilterContainer = styled.div`
	display: flex;
	width: 100%;
	align-items: start;
	justify-content: space-between;
`;

const FilterBar = (props: IFilterBarProps) => {
	return (
		<FilterContainer>
			<FilterByProduct />
			<FilterByPriority />
		</FilterContainer>
	);
};

export default FilterBar;
