import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map} from 'rxjs';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  standalone: true,
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  @ViewChild('filterVal', {static: true}) filterVal: ElementRef
  @Input() placeHolder: string = 'Rechercher...';
  @Output() onFilterText = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    fromEvent(this.filterVal.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value && event.target.value.trim();
        }),
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe({
      // Emit value
      next: (text: string) => {
        this.onFilterText.emit(text.toLowerCase())
      },
      error: (err: any) => {
        this.onFilterText.emit('');
      }
    })
  }
}
