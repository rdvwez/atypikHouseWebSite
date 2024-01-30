import {CustomLocale} from 'flatpickr/dist/types/locale';

export interface DateOptionInterface {
  maxDate?: Date;
  mode?: string;
  enableTime?: boolean;
  locale?: CustomLocale;
  dateFormat: string // 'd/m/Y'
  minDate?: string
}
