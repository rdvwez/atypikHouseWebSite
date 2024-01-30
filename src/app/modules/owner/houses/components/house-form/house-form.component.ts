import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {HouseInterface} from '../../../../admin/house/shared/model/house.interface';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';
import {HOUSE_CONST} from '../../../../admin/house/shared/constant/data.constant';
import {DataSelectInterface} from '../../../../../core/components/data-select/data-select.interface';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseFormComponent implements OnInit {
  // constant
  generalConst = GENERAL_DATA_TEXT_CONST;
  mode: string = 'CREATE';
  dataConst = HOUSE_CONST;
  // forms
  formHouse: FormGroup;
  // input && output data
  @Output() action = new EventEmitter<{ value: HouseInterface | null, action: FormActionsEnum }>();
  @Input() loading: boolean | undefined | null;
  @Input() houseSelected: HouseInterface | null | undefined;

  @Input() thematics: DataSelectInterface[] | null;
  @Input() categories: DataSelectInterface[] | null;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.checkAction();
  }

  initForm(): void {
    this.formHouse = this.fb.group({
      id: [''],
      show: [true],
      libelle: ['', Validators.required], // string
      description: ['', Validators.required], // Description
      bedroom_number: ['', Validators.required], // number
      person_number: ['', Validators.required], // number
      parking_distance: [''], // number
      area: [''], // number
      water: ['', Validators.required], // boolean
      power: [false, Validators.required], // boolean
      price: ['', Validators.required], // number
      latitude: [, Validators.required], // latitude
      longitude: [, Validators.required], // longitude
      address: ['', Validators.required],
      thematic: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  /**
   * submit form
   * send new event data form && add
   */
  add() {
    // transform data integer
    this.formHouse.get('category')?.setValue(+this.formHouse.get('category')?.value);
    this.formHouse.get('thematic')?.setValue(+this.formHouse.get('thematic')?.value);
    // emit action
    this.action.emit({
      value: this.formHouse.value,
      action: this.mode === 'CREATE' ? FormActionsEnum.CREATE : FormActionsEnum.UPDATE
    });
  }

  /**
   * Check if UPDATE OR CREATE
   * patch value when UPDATE
   */
  checkAction() {
    if (this.houseSelected) {
      this.mode = 'UPDATE'
      // Patch value
      const categoryObject = this.categories?.find((elt: DataSelectInterface) => elt.displayName == this.houseSelected?.category);
      const thematicObject = this.thematics?.find((elt: DataSelectInterface) => elt.displayName == this.houseSelected?.thematic);

      this.formHouse.patchValue({
        ...this.houseSelected,
        category: categoryObject?.name,
        thematic: thematicObject?.name
      });
    }
  }

  displayBtnLabel(): string {
    return this.mode === 'CREATE' ? this.generalConst.forms.save : this.generalConst.forms.update;
  }
}
