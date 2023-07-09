import { getCategoryByType, getFieldByPriority } from '@/utils/api-filters';
import { PriorityType } from '@/types/PriorityTypes';
import { FilterType } from '@/types/FilterTypes';
import { useFilter } from '@/hooks/useFilter';
import { Api } from '../axios-config';

export interface IProductList {
	_id: string;
	name: string;
	image: string;
	price: number;
}

export interface IProductDetail {
	_id: string;
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
	filter = '',
	type = FilterType.ALL,
	priority = PriorityType.NEWS
): Promise<TProductListWTotalCount | Error> => {
	try {
		const category = getCategoryByType(type);
		const sort = getFieldByPriority(priority);
		const url = `/products?page=${page}&limit=${process.env.NEXT_PUBLIC_PAGE_LIMIT}&name=${filter}&category=${category}&sort=${sort.field}&order=${sort.order}`;

		const { data } = await Api.get(url);

		if (data) {
			return {
				data: data.products,
				totalCount: Number(data.totalCount),
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

const getById = async (id: string): Promise<IProductDetail | Error> => {
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
