import { FilterType } from '@/types/FilterTypes';
import { PriorityType } from '@/types/PriorityTypes';

export function getCategoryByType(type: FilterType) {
	if (type == FilterType.CHAIR) return 'chairs';
	if (type == FilterType.NOTE) return 'notebooks';
	if (type == FilterType.PERIPHERAL) return 'peripherals';
	return '';
}

export function getFieldByPriority(priority: PriorityType) {
	if (priority == PriorityType.NEWS)
		return { field: 'created_at', order: 'ASC' };
	if (priority == PriorityType.BIGGEST_PRICE)
		return { field: 'price', order: 'DESC' };
	if (priority == PriorityType.MINOR_PRICE)
		return { field: 'price', order: 'ASC' };
	return { field: 'sales', order: 'DESC' };
}
