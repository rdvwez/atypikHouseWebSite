import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserSerializer} from '../serializer/user.serializer';
import {AbstractCrudService} from '../../../../../shared/service/crud.service';
import {UserInterface} from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractCrudService<UserInterface> {

  constructor(
    private _http: HttpClient,
    private uSerializer: UserSerializer) {
    super(
      _http,
      uSerializer
    );
    this.endpoint = 'user';
  }
}
