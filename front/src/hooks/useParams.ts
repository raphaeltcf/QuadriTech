import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useParams() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams()!;

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(Array.from(searchParams.entries()));

			params.set(name, value);

			if (name !== 'page') {
				params.set('page', '1');
			}

			return params.toString();
		},
		[searchParams]
	);

	const changeURL = (name: string, value: string) => {
		router.push(pathname + '?' + createQueryString(name, value));
	};

	return { changeURL, createQueryString };
}
