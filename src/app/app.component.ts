import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-goodreads';
  searchTitle = 'aaaaaaaaaaaaaaa';
  imagePath = '../assets/1.jfif';
  list = [
    'melons',
    'grapes',
    2,
    'apples',
    {
      1: 'value',
      2: 'another value'
    }
  ];

  addToList(value: string) {
    this.list = [...this.list, value];
  }
}
