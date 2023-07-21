import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from "./components/recipes/recipes.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";

const routs: Routes =[
  {path:"", component: RecipesComponent},
  {path:"shopping-list", component: ShoppingListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routs)]
})

export class AppRoutingModule {}
