import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
	label: string;
}

const Input = (
	{ className, label, ...props }: IInputProps,
	ref: LegacyRef<HTMLInputElement> | undefined
) => {
	const inputClassName = twMerge(
		className,
		'rounded-lg border border-high-dark bg-zinc-100 p-4 text-sm font-normal text-dark placeholder-gray-500 outline-none transition-all mb-6'
	);

	return (
		<div className='flex w-full flex-col'>
			<label
				htmlFor={props.id}
				className=' text-base pb-4 font-medium text-dark'
			>
				{label}
			</label>
			<input
				ref={ref}
				className={inputClassName}
				{...props}
			/>
		</div>
	);
};

export default forwardRef(Input);
