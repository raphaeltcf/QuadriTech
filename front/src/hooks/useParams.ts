import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useParams() {
	const searchParams = useSearchParams()!;

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(Array.from(searchParams.entries()));

			params.set(name, value);

			if (name === 'search') {
				params.set('page', '1');
			}

			return params.toString();
		},
		[searchParams]
	);

	return { createQueryString };
}
