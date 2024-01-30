import {DataSelectInterface} from '../../core/components/data-select/data-select.interface';
import {Observable} from 'rxjs';

export interface IDataService {

  /*
  * Format array to data select interface
  * key to display && id for name
  */
  format(data: Observable<any[]>, key: string): Observable<DataSelectInterface[]>
}
