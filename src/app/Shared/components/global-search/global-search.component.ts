import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
})
export class GlobalSearchComponent implements OnInit, OnChanges {
  @Input() searchValue!: string;
  @Output() onSearchChage = new EventEmitter();

  searchField = new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value: string) => {
        this.onSearchChage.emit(value);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.searchValue) {
      this.searchField.setValue(this.searchValue);
    }
  }
}
