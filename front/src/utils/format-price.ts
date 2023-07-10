function formatPrice(value: number) {
	return value.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});
}

function formatStringPrice(value: string) {
	const numericValue = Number(value.replace(',', '.'));

	// Verifica se o valor convertido é um número válido
	if (isNaN(numericValue)) {
		throw new Error('Valor inválido');
	}
	return numericValue.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});
}

export { formatPrice, formatStringPrice };
