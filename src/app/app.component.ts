import { Component } from '@angular/core';
import { Pages } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipes-book';
  page: Pages = 'recipes';
  switchPage(newPage: Pages = 'recipes') {
    this.page = newPage;
  }
}
