import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PropertySerializer} from '../serializer/property.serializer';
import {AbstractCrudService} from '../../../../../shared/service/crud.service';
import {PropertyInterface} from '../model/property.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService extends AbstractCrudService<PropertyInterface> {

  constructor(
    private _http: HttpClient,
    private tSerializer: PropertySerializer
  ) {
    super(
      _http,
      tSerializer
    )
    this.endpoint = 'property';
  }
}
