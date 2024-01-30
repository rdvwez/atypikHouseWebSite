import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataSelectInterface} from '../../../../../core/components/data-select/data-select.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {VALUE_CONST} from '../../shared/constant/data.constant';
import {ValueInterface} from '../../shared/model/value.interface';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';

@Component({
  selector: 'app-value-form',
  templateUrl: './value-form.component.html',
  styleUrls: ['./value-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValueFormComponent implements OnInit {
  // Constant
  dataConst = VALUE_CONST;
  generalConst = GENERAL_DATA_TEXT_CONST;
  mode: string = 'CREATE';

  @Input() properties: DataSelectInterface[] | null;
  @Input() valueSelected: ValueInterface | undefined | null;
  @Output() action = new EventEmitter<{ value: ValueInterface | null, action: FormActionsEnum }>();

  @Input() loading: boolean | null

  valueForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.checkAction();
  }

  initForm(): void {
    this.valueForm = this.fb.group({
      'id': [''],
      'libelle': ['', Validators.required],
      'property_object': ['', Validators.required]
    });
  }

  emitAction() {
    // Convert value in integer
    this.valueForm.get('property_object')?.setValue(+this.valueForm.get('property_object')?.value);

    this.action.emit({
      value: this.valueForm.value,
      action: this.mode === 'CREATE' ? FormActionsEnum.CREATE : FormActionsEnum.UPDATE
    });
  }

  /**
   * Check if UPDATE OR CREATE
   * patch value when UPDATE
   */
  checkAction() {
    if (this.valueSelected) {
      this.mode = 'UPDATE'
      // patch value
      const valueObject = this.properties?.find((elt: DataSelectInterface) => elt.displayName == this.valueSelected?.property_object);

      this.valueForm.patchValue({
        property_object: valueObject?.name,
        id: this.valueSelected.id,
        libelle: this.valueSelected.libelle,
      });
    }
  }

  displayBtnLabel(): string {
    return this.mode === 'CREATE' ? this.generalConst.forms.save : this.generalConst.forms.update;
  }
}
