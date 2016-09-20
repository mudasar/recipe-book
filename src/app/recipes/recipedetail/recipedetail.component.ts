import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit, OnDestroy {

   selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService,
              private router:Router,
              private route: ActivatedRoute,
              private recipesService: RecipeService
            ) {

  }

  ngOnInit() {
   this.subscription = this.route.params.subscribe(
       (params:any) => {
         this.recipeIndex = params['id'];
         this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
       }
   );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddToShoppingList(){
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete(){
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes'])
  }
}
