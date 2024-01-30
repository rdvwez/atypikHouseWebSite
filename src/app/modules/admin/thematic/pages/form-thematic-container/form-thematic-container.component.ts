import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject, takeUntil} from 'rxjs';
import {TypeAlert} from '../../../../../core/components/alert/alert.component';
import {THEMATIC_CONST} from '../../shared/constant/thematic.constant';
import {selectErrorThematic, selectThematic} from '../../shared/store';
import {ThematicInterface} from '../../shared/model/thematic.interface';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {ThematicAction} from '../../shared/store/thematic.action';
import {RESPONSE_SERVER_CONST} from '../../../../../shared/constant/response-server.constant';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';

@Component({
  selector: 'app-form-thematic-container',
  templateUrl: './form-thematic-container.component.html',
  styleUrls: ['./form-thematic-container.component.css']
})
export class FormThematicContainerComponent implements OnInit, OnDestroy {

  dataConst = THEMATIC_CONST;
  generalConst = GENERAL_DATA_TEXT_CONST;
  responseServerConst = RESPONSE_SERVER_CONST;
  thematic$: Observable<ThematicInterface | undefined>;
  // error handling
  alert: TypeAlert;
  destroyed$: Subject<void> = new Subject<any>();
  messageResponse: string = '';
  errorMessage$: Observable<string> = this._store.pipe(select(selectErrorThematic));

  constructor(
    private _store: Store,
    private router: ActivatedRoute,
    private routes: Router
  ) {
    const id = this.router.snapshot.params['id'];
    // Select category by Id
    this.thematic$ = this._store.pipe(select(selectThematic(parseInt(id))));
  }

  ngOnInit(): void {
  }

  formAction(data: { value: any, action: FormActionsEnum }): void {
    switch (data.action) {
      case  FormActionsEnum.CREATE: // Add category
        // Add category
        this._store.dispatch(ThematicAction.addThematic({thematic: data.value}));
        this.onErrorMessage(data.action);
        return;
      case FormActionsEnum.UPDATE:
        this._store.dispatch(ThematicAction.updateThematic({thematic: data.value}));
        this.onErrorMessage(data.action);
        return;
    }
  }

  onErrorMessage(action: FormActionsEnum) {
    // update category
    this.errorMessage$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe({
      next: (err: string) => {
        if (err) {
          // error operations
          this.alert = TypeAlert.ERROR;
          this.messageResponse = err;
        } else {
          this.alert = TypeAlert.SUCCESS;
          this.messageResponse = action === FormActionsEnum.UPDATE ? this.responseServerConst.success.update : this.responseServerConst.success.add
        }
      }
    })
  }

  onClickList() {
    this.routes.navigate(['/admin/thematic']);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
