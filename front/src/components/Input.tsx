import { useField } from '@unform/core';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface IInputProps extends ComponentPropsWithoutRef<'input'> {
	label: string;
	name: string;
}

const Input = ({ name, className, label, ...props }: IInputProps) => {
	const { fieldName, defaultValue, registerField, clearError, error } =
		useField(name);

	const inputClassName = twMerge(
		className,
		'rounded-lg border border-high-dark bg-zinc-100 p-4 text-sm font-normal text-dark placeholder-gray-500 outline-none transition-all '
	);

	const [value, setValue] = useState(defaultValue || '');

	useEffect(() => {
		registerField({
			name: fieldName,
			getValue: () => value,
			setValue: (_, newValue) => setValue(newValue),
		});
	}, [fieldName, registerField, value]);

	return (
		<div className='flex w-full flex-col mb-6'>
			<label
				htmlFor={props.id}
				className=' text-base mb-3 font-medium text-dark'
			>
				{label}
			</label>
			<input
				{...props}
				className={inputClassName}
				value={value}
				defaultValue={defaultValue}
				name={name}
				onKeyDown={(e) => {
					error && clearError();
					props.onKeyDown?.(e);
				}}
				onChange={(e) => {
					setValue(e.target.value);
					props.onChange?.(e);
				}}
			/>
			{error && <div className='mt-px text-xs text-red-500'>{error}</div>}
		</div>
	);
};

export default Input;
