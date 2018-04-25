import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe("Test Recipe 1","Test Description 1","https://www.mamador.com.ng/media/catalog/product/cache/76/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/a/samosa_small.1477920885.jpg"),
  new Recipe("Test Recipe 2","Test Description 2","https://www.mamador.com.ng/media/catalog/product/cache/76/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/a/samosa_small.1477920885.jpg")
];
  constructor() { }

  ngOnInit() {
  }

}
