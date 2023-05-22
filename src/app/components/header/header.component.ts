import { Component, EventEmitter, Output } from '@angular/core';
import { Pages } from 'src/app/shared/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() pageRequest = new EventEmitter<Pages>();
  newPage: Pages = 'recipes';

  pageRecipes() {
    this.newPage = 'recipes';
    this.pageRequest.emit(this.newPage);
  }
  pageShopping() {
    this.newPage = 'shopping';
    this.pageRequest.emit(this.newPage);
  }
}
