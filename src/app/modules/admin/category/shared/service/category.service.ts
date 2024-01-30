import {Injectable} from '@angular/core';
import {AbstractCrudService} from '../../../../../shared/service/crud.service';
import {HttpClient} from '@angular/common/http';
import {CategorySerializer} from '../serializers/category.serializer';
import {CategoryInterface} from '../models/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends AbstractCrudService<CategoryInterface> {

  constructor(
    private _http: HttpClient,
    private tSerializer: CategorySerializer
  ) {
    super(
      _http,
      tSerializer
    )
    this.endpoint = 'category';
  }
}
