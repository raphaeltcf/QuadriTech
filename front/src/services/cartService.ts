import axios, { AxiosResponse, AxiosError } from 'axios';
import { IProductInCart } from './api/products/ProductsService';

const calculateShipping = async (cep: string) => {
	try {
		const url = `https://www.cepcerto.com/ws/json-frete/50020360/${cep}/500`;
		const response: AxiosResponse = await axios.get(url);

		// Handle the response data
		const data = response.data;
		return data;
	} catch (error) {
		const AxiosErros = error as AxiosError;
		console.error('Error:', AxiosErros);
	}
};

const calculateTotal = (value: IProductInCart[]) => {
	return value.reduce(
		(sum, item) => (sum += item.price * item.cart_quantity),
		0
	);
};

const calculateTotalWithDelivery = (price: number, delivery: string) => {
	const numericValue = Number(delivery.replace(',', '.'));

	// Verifica se o valor convertido é um número válido
	if (isNaN(numericValue)) {
		throw new Error('Valor inválido');
	}

	return price + numericValue;
};

export { calculateShipping, calculateTotal, calculateTotalWithDelivery };
