import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {

  constructor() { }
  private recipes: Recipe[] = [
    new Recipe("Achari Qeema", "Qeema made with achar and other spices, very hot", "http://2.bp.blogspot.com/-TlNWh0_hHAo/UTqGbHzyhZI/AAAAAAAAA_A/yxGqaXmSO1c/s1600/Qeema+(3).jpg",[
        new Ingredient("Goat mince", 1),
        new Ingredient("Tomato", 3),
        new Ingredient("Onion", 1),
        new Ingredient("Green Chilies ", 5)
    ]),
    new Recipe("Schnit­zel", "Very Tasty", "http://www.duden.de/_media_/full/S/Schnitzel-201020474666.jpg",[
        new Ingredient("French Fries", 2),
        new Ingredient("Goat meat", 1)
    ]),
    new Recipe("Summer salad", "Okayis", "http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-02_mini.jpg",[])
  ];

  getRecipes(){
    return this.recipes;
  }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
     this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
}
