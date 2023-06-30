'use client';
import { ArrowLeft3 } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

export const Button = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	gap: 5px;

	font-family: inherit;
	color: var(--secondary-text);
	font-weight: 600;
	font-size: 15px;
`;

interface IButtonProps {
	navigate: string;
}

export const BackButton = ({ navigate }: IButtonProps) => {
	const router = useRouter();

	const handleNavigate = () => {
		router.push(navigate);
	};

	return (
		<Button onClick={handleNavigate}>
			<ArrowLeft3
				size='24'
				color='var(--secondary-text)'
			/>
			Voltar
		</Button>
	);
};
