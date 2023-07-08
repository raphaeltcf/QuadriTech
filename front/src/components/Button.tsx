import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
	children: ReactNode;
}

const Button = ({ children, className, ...props }: IButtonProps) => {
	const buttonClassName = twMerge(
		className,
		'rounded-lg  bg-brand-orange py-3 text-white font-semibold'
	);
	return (
		<button
			className={buttonClassName}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
