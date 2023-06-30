'use client';
import { FilterType } from '@/types/FilterTypes';
import { PriorityType } from '@/types/PriorityTypes';
import { ReactNode, createContext, useState } from 'react';

export const FilterContext = createContext({
	search: '',
	page: 0,
	type: FilterType.ALL,
	priority: PriorityType.NEWS,
	setPriority: (value: PriorityType) => {},
	setSearch: (value: string) => {},
	setPage: (value: number) => {},
	setType: (value: FilterType) => {},
});

interface IProviderProps {
	children: ReactNode;
}

export const FilterContextProvider = ({ children }: IProviderProps) => {
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(0);
	const [type, setType] = useState(FilterType.ALL);
	const [priority, setPriority] = useState(PriorityType.NEWS);

	return (
		<FilterContext.Provider
			value={{
				search,
				page,
				type,
				priority,
				setPage,
				setSearch,
				setType,
				setPriority,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
