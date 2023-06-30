import Header from '@/components/Header';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { FilterContextProvider } from '@/contexts/FilterContext';
import DefaultProviders from '@/components/DefaultProviders';

const montserrat = Montserrat({
	weight: ['300', '400', '500', '600'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'QuadriTech',
	description: 'Uma Loja de aparelhos eletrônicos feito em NestJs e NextJs.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR'>
			<body className={montserrat.className}>
				<DefaultProviders>
					<Header />
					{children}
				</DefaultProviders>
			</body>
		</html>
	);
}
