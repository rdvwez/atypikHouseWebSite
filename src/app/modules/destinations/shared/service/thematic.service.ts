import {Injectable} from '@angular/core';
import {AbstractCrudService} from '../../../../shared/service/crud.service';
import {HttpClient} from '@angular/common/http';
import {ThematicSerializer} from '../../../admin/thematic/shared/serializer/thematic.serializer';
import {ThematicInterface} from '../../../admin/thematic/shared/model/thematic.interface';

@Injectable({
  providedIn: 'root'
})
export class ThematicService extends AbstractCrudService<ThematicInterface> {

  constructor(
    private _http: HttpClient,
    private tSerializer: ThematicSerializer
  ) {
    super(
      _http,
      tSerializer
    )
    this.endpoint = 'thematic';
  }
}
