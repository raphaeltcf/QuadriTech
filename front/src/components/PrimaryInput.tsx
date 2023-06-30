import { SearchNormal1 } from 'iconsax-react';
import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const PrimaryInput = styled.input`
	width: 350px;
	padding: 10px 16px;
	border-radius: 8px;
	font-family: inherit;
	background-color: var(--bg-secondary);
	color: var(--text-dark);
	border: 0;
	outline: 0;
`;

const InputContainer = styled.div`
	position: relative;
	width: 350px;

	svg {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
	}
`;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const PrimaryInputWIcon = (props: IInputProps) => {
	return (
		<InputContainer>
			<PrimaryInput {...props} />
			<SearchNormal1
				size='24'
				color='#737380'
			/>
		</InputContainer>
	);
};
