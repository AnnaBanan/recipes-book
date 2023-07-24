import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipes.model";
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit{
  recipe!: Recipe;
  editMode = false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.recipe = this.recipeService.getRecipe(+params["id"]);
      this.editMode = params["id"] != null;
    })
  }
}
