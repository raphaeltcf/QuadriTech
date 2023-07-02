'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useWindowDimensions from 'use-window-dimensions';
import { ProfileCircle } from 'iconsax-react';
import { styled } from 'styled-components';
import { ChangeEvent, useMemo } from 'react';

import { PrimaryInputWIcon } from './PrimaryInput';
import { useParams } from '@/hooks/useParams';
import Cart from './Cart';

const TagHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1em 2em;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;

		svg {
			cursor: pointer;
		}
	}
`;

const Logo = styled.a`
	color: var(--logo--color);
	font-weight: bolder;
	font-size: 1.5em;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const Header = () => {
	const { width } = useWindowDimensions();

	const pathname = usePathname();
	const searchParams = useSearchParams()!;

	const { changeURL } = useParams();

	const handleChange = (
		query: string,
		event: ChangeEvent<HTMLInputElement | undefined>
	) => {
		changeURL(query, event.target.value);
	};

	const search = useMemo(() => {
		return searchParams.get('search') || '';
	}, [searchParams]);

	return (
		<TagHeader>
			<Logo href='/'>QUADRITECH</Logo>
			<div>
				{width > 768 && pathname == '/' && (
					<PrimaryInputWIcon
						placeholder='Procurando por algo específico?'
						value={search}
						onChange={(event) => handleChange('search', event)}
					/>
				)}
				<Cart />
				<ProfileCircle
					size='24'
					color='var(--text-dark)'
				/>
			</div>
		</TagHeader>
	);
};

export default Header;
