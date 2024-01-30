import {CategoryInterface} from '../models/category.interface';

export interface CategoryState {
  categories: ReadonlyArray<CategoryInterface>,
  error: string;
  selected?: CategoryInterface;
  filter?: CategoryInterface;
}
