import {ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HOME_CONSTANT} from '../../constant/home.constant';
import {SearchInterface} from '../../model/search.interface';
import {HouseActionEnum} from '../../../owner/houses/house-action.enum';
import {ButtonTextComponent} from '../../../../core/components/utils/button-text/button-text.component';
import {Observable} from 'rxjs';
import {DataSelectInterface} from '../../../../core/components/data-select/data-select.interface';
import {select, Store} from '@ngrx/store';
import {selectCategories} from '../../../admin/category/shared/store';
import {DataSelectService} from '../../../../shared/service/data-select.service';
import {DataSelectComponent} from '../../../../core/components/data-select/data-select.component';
import {AsyncPipe} from '@angular/common';
import {DateInputComponent} from '../../../../core/components/date-input/date-input.component';
import {DateOptionInterface} from '../../../../core/components/date-input/date-option.interface';
import {French} from 'flatpickr/dist/l10n/fr';

@Component({
  selector: 'app-search-general-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonTextComponent,
    DataSelectComponent,
    AsyncPipe,
    DateInputComponent
  ],
  templateUrl: './search-general-input.component.html',
  styleUrls: ['./search-general-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchGeneralInputComponent implements OnInit {
  dataConst = HOME_CONSTANT;
  searchForm: FormGroup;
  loading: boolean | undefined;

  @Output() action = new EventEmitter<{ data: SearchInterface, action: HouseActionEnum }>();
  categories$: Observable<DataSelectInterface[]>;

  dateOptions: DateOptionInterface = {
    enableTime: false,
    dateFormat: "d/m/Y",
    minDate: "today",
    locale: French,
    mode: "range"
  }

  constructor(
    private fb: FormBuilder,
    private _store: Store
  ) {
    this.categories$ = inject(DataSelectService).format(this._store.pipe(select(selectCategories)), 'libelle');
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = this.fb.group({
      category_id: [''],
      thematic_id: [''],
      start_date: [''],
      person_nbr: ['']
    })
  }

  emitAction(): void {
    this.action.emit({data: this.searchForm.value, action: HouseActionEnum.SEARCH_GLOBAL})
  }
}
