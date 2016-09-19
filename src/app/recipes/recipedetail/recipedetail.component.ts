import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredirents);
    console.log(this.selectedRecipe.ingredirents);
  }

}
