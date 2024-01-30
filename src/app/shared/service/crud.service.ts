import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {ResourceListInterface} from '../interfaces/resource-list.interface';
import {ISerializer} from '../serializer/iserializer';
import {environment} from '../../../environments/environment';
import {ResourceInterface} from '../interfaces/resource.interface';
import {ICrud} from '../interfaces/ICrud';

@Injectable()

export class AbstractCrudService<T extends ResourceInterface> implements ICrud<ResourceInterface> {
  public endpoint: string = ''

  constructor(
    protected httpClient: HttpClient,
    private serializer: ISerializer
  ) {

  }

  create(data: T): Observable<T> {
    return this.httpClient.post<T>(`${environment.urlApi}${this.endpoint}`,
      this.serializer.toJson(data));
  }

  list(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${environment.urlApi}${this.endpoint}`)
      .pipe(
        map((data: T[]) => {
          return this.convertData(data)
        })
      );
  }

  listPaginate(page: number = 1): Observable<ResourceListInterface<T>> {
    return this.httpClient.get<ResourceListInterface<T>>(`${environment.urlApi}${this.endpoint}?page=${page}`)
      .pipe(map((result: ResourceListInterface<T>) => {
          return {...result, datas: this.convertData(result.datas)};
        })
      );
  }

  search(page: number = 1, filter: string): Observable<ResourceListInterface<T>> {
    return this.httpClient.post<ResourceListInterface<T>>(`${environment.urlApi}${this.endpoint}/search?page=${page}`, {infos: filter})
      .pipe(
        map((result: ResourceListInterface<T>) => {
          return {...result, datas: this.convertData(result.datas)};
        })
      );
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.urlApi}${this.endpoint}/${id}`);
  }

  read(id: number): Observable<T> {
    return this.httpClient.get<T>(`${environment.urlApi}${this.endpoint}/${id}`)
      .pipe(
        map((res: T) => {
          return this.serializer.fromJson(res) as T
        })
      );
  }

  update(data: T): Observable<any> {
    return this.httpClient.put(`${environment.urlApi}${this.endpoint}/${data.id}`,
      this.serializer.toJson(data)
    );
  }

  protected convertData(data: any): T[] {
    return data.map((item: any) => this.serializer.fromJson(item));
  }
}
