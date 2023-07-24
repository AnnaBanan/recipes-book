import {Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../recipes.model';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Route, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit{
  recipeDetails!: Recipe;
constructor(private shoppingService: ShoppingListService,
            private route: ActivatedRoute,
            private router: Router,
            private recipeService:RecipeService) {
}
  AddrecipeIngredientsToShoppinglist(){
    const ingredientsArr = this.recipeDetails.ingredients;
    // for (let i = 0 ; i < ingredientsArr.length; i++){
    //   this.shoppingService.onAddIngredient(ingredientsArr[i]);
    // }
    // possible, but fires too many events
    this.shoppingService.onAddIngredients(ingredientsArr);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const recipe= this.recipeService.getRecipe(+params['id']);
      if(!!recipe){
        this.recipeDetails = recipe;
      }
    });
  }
  onEditRecipe(){
  this.router.navigate(["edit"],{relativeTo: this.route})
  }
}
