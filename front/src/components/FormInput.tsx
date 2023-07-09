import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
	label: string;
	error?: boolean;
	errorMessage?: string;
}

const Input = (
	{ className, label, error, errorMessage, ...props }: IInputProps,
	ref: LegacyRef<HTMLInputElement> | undefined
) => {
	const inputClassName = twMerge(
		className,
		'rounded-lg border border-high-dark bg-zinc-100 p-4 text-sm font-normal text-dark placeholder-gray-500 outline-none transition-all '
	);

	return (
		<div className='flex w-full flex-col mb-6'>
			<label
				htmlFor={props.id}
				className=' text-base mb-3 font-medium text-dark'
			>
				{label}
			</label>
			<input
				ref={ref}
				{...props}
				className={inputClassName}
			/>
			{error && (
				<div className='mt-px text-xs text-red-500'>{errorMessage}</div>
			)}
		</div>
	);
};

export default forwardRef(Input);
