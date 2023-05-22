import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class RecipeService {
  getDetails = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Summer Drink',
      'Nice on Ice. A very refreshing drink.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [new Ingredient('apple', 2, 'pieces'), new Ingredient('water', 100, 'ml')]
    ),
    new Recipe(
      'Hangover Breakfast',
      'Best food for your recovery.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('salt', 1, 'pinch'),
        new Ingredient('cucumber', 2, 'pieces'),
        new Ingredient('toast', 4, 'slices'),
        new Ingredient('cheese', 4, 'slices'),
      ]
    ),
  ];

  getRecipes() {
    // slice to get a copy of array
    return this.recipes.slice();
  }
}
