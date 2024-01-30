import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataCategoryConstant} from '../../shared/constant/data.constant';
import {CategoryInterface} from '../../shared/models/category.interface';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryFormComponent implements OnInit {

  dataConst = DataCategoryConstant;
  generalConst = GENERAL_DATA_TEXT_CONST;

  @Input() selectedCategory: CategoryInterface | undefined | null;
  categoryForm: FormGroup;
  @Output() action = new EventEmitter<{ value: CategoryInterface | null, action: FormActionsEnum }>();
  mode: string = 'CREATE';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.checkAction();
  }

  initForm(): void {
    this.categoryForm = this.fb.group({
      'id': [''],
      'libelle': ['', Validators.required],
      'show': [false]
    });
  }

  emitAction(): void {
    this.action.emit({
      value: this.categoryForm.value,
      action: this.mode === 'CREATE' ? FormActionsEnum.CREATE : FormActionsEnum.UPDATE
    });
  }

  /**
   * Check if UPDATE OR CREATE
   * patch value when UPDATE
   */
  checkAction() {
    if (this.selectedCategory) {
      this.mode = 'UPDATE'
      this.categoryForm.patchValue(this.selectedCategory);
    }
  }

  displayBtnLabel(): string {
    return this.mode === 'CREATE' ? this.generalConst.forms.save : this.generalConst.forms.update;
  }
}
