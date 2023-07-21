import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input()
  recipe!: Recipe;
constructor(private shoppingService: ShoppingListService) {
}
  AddrecipeIngredientsToShoppinglist(){
    const ingredientsArr = this.recipe.ingredients;
    // for (let i = 0 ; i < ingredientsArr.length; i++){
    //   this.shoppingService.onAddIngredient(ingredientsArr[i]);
    // }
    // possible, but fires too many events
    this.shoppingService.onAddIngredients(ingredientsArr);
  }
}
