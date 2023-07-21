import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from "./components/recipes/recipes.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {NoRecipeComponent} from "./components/recipes/no-recipe/no-recipe.component";
import {RecipeDetailComponent} from "./components/recipes/recipe-detail/recipe-detail.component";

const routes: Routes =[
  {path:"", redirectTo:"/recipes", pathMatch: "full"}, // first time visit the website will be redirected
  {path:"recipes", component: RecipesComponent, children:[
      {path:"", component: NoRecipeComponent, pathMatch: "full"},
      {path:":id", component: RecipeDetailComponent}
    ]},
  {path:"shopping-list", component: ShoppingListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}
