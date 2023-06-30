'use client';

import { FilterContextProvider } from '@/contexts/FilterContext';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

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
