import { Injectable} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {Subject} from "rxjs";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('sour Apples', 5, 'pieces'),
    new Ingredient('Sugar', 300, 'gram'),
    new Ingredient('butter', 200, 'gram'),
    new Ingredient('flour', 300, 'gram'),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  onAddIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
