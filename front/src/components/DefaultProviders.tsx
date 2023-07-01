'use client';

import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { FilterContextProvider } from '@/contexts/FilterContext';

interface IDefaultProvidersProps {
	children: ReactNode;
}

const theme = {
	defaultBreakpoint: '768px',
};

const DefaultProviders = ({ children }: IDefaultProvidersProps) => {
	return (
		<FilterContextProvider>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</FilterContextProvider>
	);
};

export default DefaultProviders;
