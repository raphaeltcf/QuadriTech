'use client';
import { FilterType } from '@/types/FilterTypes';
import { PriorityType } from '@/types/PriorityTypes';
import { ReactNode, createContext, useState } from 'react';

export const FilterContext = createContext({
	type: FilterType.ALL,
	priority: PriorityType.NEWS,
	setPriority: (value: PriorityType) => {},
	setType: (value: FilterType) => {},
});

interface IProviderProps {
	children: ReactNode;
}

export const FilterContextProvider = ({ children }: IProviderProps) => {
	const [type, setType] = useState(FilterType.ALL);
	const [priority, setPriority] = useState(PriorityType.NEWS);

	return (
		<FilterContext.Provider
			value={{
				type,
				priority,
				setType,
				setPriority,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
