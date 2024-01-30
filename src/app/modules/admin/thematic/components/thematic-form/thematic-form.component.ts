import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {THEMATIC_CONST} from '../../shared/constant/thematic.constant';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormActionsEnum} from '../../../../../shared/enums/form-actions.enum';
import {ThematicInterface} from '../../shared/model/thematic.interface';
import {GENERAL_DATA_TEXT_CONST} from '../../../../../shared/constant/data-text.constant';

@Component({
  selector: 'app-thematic-form',
  templateUrl: './thematic-form.component.html',
  styleUrls: ['./thematic-form.component.css']
})
export class ThematicFormComponent implements OnInit {
  // constant
  dataConst = THEMATIC_CONST;
  generalConst = GENERAL_DATA_TEXT_CONST;

  @Input() selectThematic: ThematicInterface | undefined | null;
  thematicForm: FormGroup;
  @Output() action = new EventEmitter<{ value: ThematicInterface | null, action: FormActionsEnum }>();
  mode: string = 'CREATE';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.checkAction();
  }

  initForm(): void {
    this.thematicForm = this.fb.group({
      'id': [''],
      'libelle': ['', Validators.required],
      'show': [false]
    });
  }

  emitAction(): void {
    this.action.emit({
      value: this.thematicForm.value,
      action: this.mode === 'CREATE' ? FormActionsEnum.CREATE : FormActionsEnum.UPDATE
    });
  }

  /**
   * Check if UPDATE OR CREATE
   * patch value when UPDATE
   */
  checkAction() {
    if (this.selectThematic) {
      this.mode = 'UPDATE'
      this.thematicForm.patchValue(this.selectThematic);
    }
  }

  displayBtnLabel(): string {
    return this.mode === 'CREATE' ? this.generalConst.forms.save : this.generalConst.forms.update;
  }
}
