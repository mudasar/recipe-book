import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new EventEmitter();
  constructor(private http:Http) { }
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

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
    }

    editRecipe(recipe: Recipe, newRecipe: Recipe) {
        this.recipes[this.recipes.indexOf(recipe)] = newRecipe;
    }

    storeData(){
        const body = JSON.stringify(this.recipes);
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.put('https://recipebook-2aa31.firebaseio.com/recipes.json',body,{headers:headers}).map((data:Response)=> data.json());
    }

    fetchData(){
        return this.http.get('https://recipebook-2aa31.firebaseio.com/recipes.json').
        map((response:Response)=>response.json())
            .subscribe((data: Recipe[])=>{
            this.recipes = data;
                console.log(data);
                this.recipesChanged.emit(this.recipes);
        });
    }

}
