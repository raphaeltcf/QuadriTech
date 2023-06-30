import { SearchNormal1 } from 'iconsax-react';
import { InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const PrimaryInput = styled.input`
	width: 100%;
	padding: 10px 16px;
	border-radius: 8px;
	font-family: inherit;
	background-color: var(--bg-secondary);
	color: var(--text-dark);
	border: 0;
	outline: 0;
	font-size: 12px;

	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;

	@media (min-width: ${(props) => props.theme.defaultBreakpoint}) {
		font-size: 14px;
	}
`;

const InputContainer = styled.div`
	position: relative;

	svg {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		background-color: var(--bg-secondary);
		width: 15px;
	}

	@media (min-width: ${(props) => props.theme.defaultBreakpoint}) {
		width: 350px;

		svg {
			width: 24px;
		}
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
