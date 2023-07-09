import { SortOrder } from 'mongoose';

export class FilterProductDTO {
  page: string;
  limit: string;
  name: string;
  category: string;
  sort: string;
  order: string;
}
