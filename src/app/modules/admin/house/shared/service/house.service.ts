import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HouseSerializer} from '../serializer/house.serializer';
import {map, Observable} from 'rxjs';
import {environment} from '../../../../../../environments/environment';
import {AbstractCrudService} from '../../../../../shared/service/crud.service';
import {HouseInterface} from '../model/house.interface';
import {SearchHouseInterface} from '../../../../destinations/shared/interface/destination.interface';
import {CityInterface} from '../model/city.interface';

@Injectable({
  providedIn: 'root'
})
export class HouseService extends AbstractCrudService<HouseInterface> {

  constructor(
    private _http: HttpClient,
    private tSerializer: HouseSerializer
  ) {
    super(
      _http,
      tSerializer
    );
    this.endpoint = 'house';
  }

  searchCustom(data: SearchHouseInterface): Observable<HouseInterface[]> {
    return this._http.post<HouseInterface[]>(`${environment.urlApi}${this.endpoint}/filter`, data)
      .pipe(
        map((data: HouseInterface[]) => this.convertData(data))
      );
  }

  getCities(): Observable<CityInterface[]> {
    return this._http.get<CityInterface[]>(`${environment.urlApi}${this.endpoint}/cities`);
  }
}
