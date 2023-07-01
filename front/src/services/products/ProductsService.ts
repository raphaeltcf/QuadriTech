import { Api } from '../api/axios-config';

export interface IProductList {
	id: string;
	name: string;
	image: string;
	price: number;
}

export interface IProductDetail {
	id: string;
	name: string;
	image: string;
	category: string;
	description: string;
	price: number;
}

export interface IProductInCart extends IProductDetail {
	cart_quantity: number;
}

type TProductListWTotalCount = {
	data: IProductList[];
	totalCount: number;
};

const getAll = async (
	page = 1,
	filter = ''
): Promise<TProductListWTotalCount | Error> => {
	try {
		const url = `/products?_page=${page}&_limit=${process.env.NEXT_PUBLIC_PAGE_LIMIT}&name_like=${filter}`;

		const { headers, data } = await Api.get(url);

		if (data) {
			return {
				data,
				totalCount: Number(
					headers['X-Total-Count'] || process.env.NEXT_PUBLIC_PAGE_LIMIT
				),
			};
		}

		return new Error(process.env.DEFAULT_ERROR_MESSAGE);
	} catch (error) {
		console.log(error);
		return new Error(
			(error as { message: string }).message ||
				process.env.NEXT_PUBLIC_DEFAULT_ERROR_MESSAGE
		);
	}
};

const getById = async (id: number): Promise<IProductDetail | Error> => {
	try {
		const { data } = await Api.get(`/products/${id}`);

		if (data) {
			return data;
		}
		return new Error(process.env.DEFAULT_ERROR_MESSAGE);
	} catch (error) {
		console.log(error);
		return new Error(
			(error as { message: string }).message ||
				process.env.NEXT_PUBLIC_DEFAULT_ERROR_MESSAGE
		);
	}
};

export const ProductsService = {
	getAll,
	getById,
};
