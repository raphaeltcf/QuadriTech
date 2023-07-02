import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import React from 'react';
import { styled } from 'styled-components';

interface IPaginationProps {
	count: number;
	page: number;
	onChange: (number: string) => void;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;
	margin: 15px auto;
	gap: 6px;
`;

const Page = styled.button<{ selected: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 8px;
	background-color: #e9e9f0;
	cursor: pointer;

	color: ${(props) =>
		props.selected ? 'var(--text-orange)' : 'var(--text-dark)'};
	font-weight: ${(props) => (props.selected ? '600' : '400')};
	border: ${(props) =>
		props.selected
			? '2px solid var(--text-orange)'
			: '1px solid var(--text-dark)'};

	text-align: center;
	font-size: 16px;
	line-height: 150%;
	text-transform: uppercase;
`;

const Pagination = (props: IPaginationProps) => {
	const countArray = Array.from(
		{ length: props.count },
		(_, index) => index + 1
	);

	return (
		<Container>
			{props.count > 1 &&
				countArray.map((item) => (
					<Page
						selected={props.page === item}
						key={item}
						onClick={() => props.onChange(String(item))}
					>
						{item}
					</Page>
				))}

			{props.count > 1 && (
				<>
					<Page selected={false}>
						<ArrowLeft2
							size='18'
							color='var(--text-dark)'
							onClick={() => props.onChange(String(props.page - 1))}
						/>
					</Page>
					<Page selected={false}>
						<ArrowRight2
							size='18'
							color='var(--text-dark)'
							onClick={() => props.onChange(String(props.page + 1))}
						/>
					</Page>
				</>
			)}
		</Container>
	);
};

export default Pagination;
