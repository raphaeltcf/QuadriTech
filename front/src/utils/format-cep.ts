export function formatCep(cep: string): string {
	// Remove any non-digit character
	cep = cep.replace(/\D/g, '');

	// Apply the mask
	cep = cep.replace(/^(\d{5})(\d{3}).*$/, '$1-$2');

	return cep;
}

export function getNumericCep(cepFormatted: string): string {
	const cepNumbers = cepFormatted.replace(/\D/g, ''); // Remove all non-digit characters
	return cepNumbers;
}
