import {Injectable} from '@angular/core';
import {IDataService} from './Idata.service';
import {map, Observable} from 'rxjs';
import {DataSelectInterface} from '../../core/components/data-select/data-select.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSelectService implements IDataService {

  format(data: Observable<any>, key: string): Observable<DataSelectInterface[]> {
    return data.pipe(
      map((data: any[]) => {
        if (!data) return [];
        return data.map((elt) => {
          return {
            name: elt.id,
            displayName: elt[key]
          }
        })
      })
    )
  }
}
