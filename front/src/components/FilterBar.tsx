'use client';
import styled from 'styled-components';
import FilterByProduct from './FilterByProduct';
import FilterByPriority from './FilterByPriority';

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
