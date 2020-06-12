import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {ISearch} from '../shared/Interfaces/searchInterface';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  title = 'Search';
  searchTerm = '';

  @Output() searchFired = new EventEmitter<ISearch>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.searchTerm = value;
  }

  onSearch() {
    this.searchFired.emit({ searchTerm: this.searchTerm });
  }
}
