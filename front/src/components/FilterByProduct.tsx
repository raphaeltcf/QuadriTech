'use client';
import { FilterType } from '@/types/FilterTypes';
import { useFilter } from '@/hooks/useFilter';
import { styled } from 'styled-components';

interface IFilterItemProps {
	selected: boolean;
}

const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 25px;
	list-style: none;
`;

const Item = styled.li<IFilterItemProps>`
	font-family: inherit;
	text-align: center;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;

	border-bottom: ${(props) => (props.selected ? '4px solid #FFA585' : '')};
	font-weight: ${(props) => (props.selected ? '700' : '400')};
	color: ${(props) => (props.selected ? 'black' : 'var(--text-dark)')};

	@media (min-width: ${(props) => props.theme.defaultBreakpoint}) {
		font-size: 15px;
	}
`;

const FilterByProduct = () => {
	const { type, setType } = useFilter();

	const handleChangeType = (value: FilterType) => {
		setType(value);
	};

	return (
		<List>
			<Item
				selected={type === FilterType.ALL}
				onClick={() => handleChangeType(FilterType.ALL)}
			>
				Todos os Produtos
			</Item>
			<Item
				selected={type === FilterType.PERIPHERAL}
				onClick={() => handleChangeType(FilterType.PERIPHERAL)}
			>
				Periféricos
			</Item>
			<Item
				selected={type === FilterType.NOTE}
				onClick={() => handleChangeType(FilterType.NOTE)}
			>
				Notebooks
			</Item>
			<Item
				selected={type === FilterType.CHAIR}
				onClick={() => handleChangeType(FilterType.CHAIR)}
			>
				Cadeiras
			</Item>
		</List>
	);
};

export default FilterByProduct;
