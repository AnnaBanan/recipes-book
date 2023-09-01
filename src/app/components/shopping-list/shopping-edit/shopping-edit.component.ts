import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  FieldError: boolean = false;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient(form: NgForm) {
    const nameValue = form.value.ingredientName;
    const amountValue = parseFloat(form.value.ingredientAmount);
    const unitValue = form.value.ingredientUnit;
    if (!isNaN(amountValue) && nameValue && unitValue) {
      const newIngredient = new Ingredient(nameValue, amountValue, unitValue );
      this.shoppingListService.onAddIngredient(newIngredient);
      this.FieldError = false;
    } else {
      this.FieldError = true;
    }
  }

}
