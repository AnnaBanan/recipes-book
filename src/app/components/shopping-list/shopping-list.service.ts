import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
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
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  onAddIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
