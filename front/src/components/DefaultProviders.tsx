'use client';

import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

import { FilterContextProvider } from '@/contexts/FilterContext';
import Login from './login/Login';
import { AuthProvider } from '@/contexts/AuthContext';

interface IDefaultProvidersProps {
	children: ReactNode;
}

const theme = {
	defaultBreakpoint: '768px',
};

const DefaultProviders = ({ children }: IDefaultProvidersProps) => {
	return (
		<AuthProvider>
			<Login>
				<FilterContextProvider>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</FilterContextProvider>
			</Login>
		</AuthProvider>
	);
};

export default DefaultProviders;
