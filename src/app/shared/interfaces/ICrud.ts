import {Observable} from 'rxjs';

export interface ICrud<ResourceInterface> {

  /**
   * Create or post data
   * @param data
   * @return Observable<T>
   */
  create(data: ResourceInterface): Observable<ResourceInterface>;

  /**
   * fetch list data
   * @return Observable<T[]>
   */
  list(): Observable<ResourceInterface[]>;

  /**
   * Get infos user
   * @param id
   * @return Observable<T>
   */
  read(id: number): Observable<ResourceInterface>;

  /**
   * update a record
   * @param data
   * @return Observable<T>
   */
  update(data: ResourceInterface): Observable<ResourceInterface>;

  /**
   * Delete record by
   * @param id
   * @return Observable<T>
   */
  delete(id: number): Observable<ResourceInterface>;
}
