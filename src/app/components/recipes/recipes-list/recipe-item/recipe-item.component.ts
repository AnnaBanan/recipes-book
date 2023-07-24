import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;
  constructor(private recipeService: RecipeService, private router: Router, private route:ActivatedRoute) {}

  ngOnInit(): void {}

  showDetails() {
    if (!!this.recipe) {
      this.router.navigate([this.index], {relativeTo: this.route})
     // this.router.navigate([this.recipe.id],{relativeTo: this.route})
    }
  }
}
