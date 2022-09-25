import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("a test recipe", "recipe", "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
