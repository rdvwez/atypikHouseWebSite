import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PropertyInterface} from '../../shared/model/property.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {PROPERTY_CONST} from '../../shared/constant/property.constant';
import {DataSelectInterface} from '../../../../../core/components/data-select/data-select.interface';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {
  // Constant
  dataConst = PROPERTY_CONST;
  generalConst = GENERAL_DATA_TEXT_CONST;
  mode: string = 'CREATE';

  // input && event emmit
  @Input() selectProperty: PropertyInterface | undefined | null;
  @Input() categories: DataSelectInterface[] | null;
  @Output() action = new EventEmitter<{ value: PropertyInterface | null, action: FormActionsEnum }>();
  // forms event
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
    this.checkAction();
  }

  initForm(): void {
    this.propertyForm = this.fb.group({
      'id': [''],
      'libelle': ['', Validators.required],
      'category': ['', Validators.required],
      'is_required': ['', Validators.required],
      'description': ['']
    });
  }

  emitAction(): void {
    // Convert category in Integer
    this.propertyForm.get('category')?.setValue(+this.propertyForm.get('category')?.value);

    this.action.emit({
      value: this.propertyForm.value,
      action: this.mode === 'CREATE' ? FormActionsEnum.CREATE : FormActionsEnum.UPDATE
    });
  }

  /**
   * Check if UPDATE OR CREATE
   * patch value when UPDATE
   */
  checkAction() {
    if (this.selectProperty) {
      this.mode = 'UPDATE'
      // patch category
      const categoryObject = this.categories?.find((elt: DataSelectInterface) => elt.displayName == this.selectProperty?.category);

      this.propertyForm.patchValue({
        category: categoryObject?.name,
        id: this.selectProperty.id,
        libelle: this.selectProperty.libelle,
        description: this.selectProperty.description,
        is_required: this.selectProperty.is_required,
      });
    }
  }

  displayBtnLabel(): string {
    return this.mode === 'CREATE' ? this.generalConst.forms.save : this.generalConst.forms.update;
  }
}
