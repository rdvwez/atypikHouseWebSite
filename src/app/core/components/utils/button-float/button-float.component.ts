import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-float',
  standalone: true,
  imports: [],
  templateUrl: './button-float.component.html',
  styleUrls: ['./button-float.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonFloatComponent implements OnInit {

  @Input() list: boolean;
  @Output() clickBtn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitList(): void {
    this.list = !this.list;
    this.clickBtn.emit(this.list);
  }

  displayIcon(): string {
    return this.list ? 'plus-lg' : 'list';
  }
}
