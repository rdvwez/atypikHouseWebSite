import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractCrudService} from '../../../../../shared/service/crud.service';
import {ValueInterface} from '../model/value.interface';
import {ValueSerializer} from '../serializer/value.serializer';

@Injectable({
  providedIn: 'root'
})
export class ValueService extends AbstractCrudService<ValueInterface> {
  constructor(
    private http: HttpClient,
    private vSerializer: ValueSerializer
  ) {
    super(
      http,
      vSerializer
    )
    this.endpoint = 'value';
  }
}
