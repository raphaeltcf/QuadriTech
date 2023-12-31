import { ArrowUp2, ArrowDown2 } from 'iconsax-react';
import { useContext, useState } from 'react';
import styled from 'styled-components';

import { FilterContext } from '@/contexts/FilterContext';
import { PriorityType } from '@/types/PriorityTypes';
import { useFilter } from '@/hooks/useFilter';
import { useParams } from '@/hooks/useParams';

interface IFilterByPriorityProps {}

const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	button {
		background: transparent;
		border: none;
		font-family: inherit;
		text-align: center;
		font-size: 12px;
		cursor: pointer;

		color: var(--text-dark);

		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			margin-left: 5px;
		}
	}

	@media (min-width: ${(props) => props.theme.defaultBreakpoint}) {
		button {
			font-size: 14px;
		}

		svg {
			margin-left: 15px;
		}
	}
`;

const PFilter = styled.ul`
	z-index: 99;
	position: absolute;
	top: 100%;
	right: 0;
	width: 220px;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
	padding: 12px 16px;
	list-style: none;

	li {
		color: var(--text-dark);
		font-size: 14px;
		cursor: pointer;
	}

	li:hover {
		text-decoration: underline;
	}

	li + li {
		margin-top: 8px;
	}
`;

const FilterByPriority = (props: IFilterByPriorityProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { setPriority } = useFilter();
	const { changeURL } = useParams();

	const handleOpen = () => {
		setIsOpen((oldValue) => !oldValue);
	};

	const handleUpdatePriority = (value: PriorityType) => {
		setPriority(value);
		changeURL('priority', String(value));
		setIsOpen(false);
	};

	return (
		<FilterContainer>
			<button onClick={handleOpen}>
				Organizar por
				{isOpen ? (
					<ArrowUp2
						size='24'
						color='var(--text-dark)'
					/>
				) : (
					<ArrowDown2
						size='24'
						color='var(--text-dark)'
					/>
				)}
			</button>

			{isOpen && (
				<PFilter>
					<li onClick={() => handleUpdatePriority(PriorityType.NEWS)}>
						Novidades
					</li>
					<li onClick={() => handleUpdatePriority(PriorityType.BIGGEST_PRICE)}>
						Preço: Maior - menor
					</li>
					<li onClick={() => handleUpdatePriority(PriorityType.MINOR_PRICE)}>
						Preço: Menor - maior
					</li>
					<li onClick={() => handleUpdatePriority(PriorityType.POPULARITY)}>
						Mais vendidos
					</li>
				</PFilter>
			)}
		</FilterContainer>
	);
};

export default FilterByPriority;
