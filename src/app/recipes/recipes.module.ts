import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {recipesRoutes} from "./recipes.routing";
import { RecipeListComponent } from './recipe-list.component';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import {CommonModule} from "@angular/common";
import {RecipeService} from "./recipe.service";

@NgModule({
    imports:[CommonModule, recipesRoutes],
    declarations:[RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipedetailComponent],
    exports: [RecipesComponent],
    providers: [RecipeService]
})
export class RecipesModule{}