import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  FieldError: boolean = false;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient(name: string, amount: string, unit: string) {
    if (!isNaN(parseFloat(amount)) && name && unit) {
      const amountValue = parseFloat(amount);
      const newIngredient = new Ingredient(name, amountValue, unit);
      this.shoppingListService.onAddIngredient(newIngredient);
      this.FieldError = false;
    } else {
      this.FieldError = true;
    }
  }
}
