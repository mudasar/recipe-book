import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {recipesRoutes} from "./recipes.routing";
import { RecipeListComponent } from './recipe-list.component';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import {CommonModule} from "@angular/common";
import {RecipeService} from "./recipe.service";
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import {     ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
    imports:[CommonModule, FormsModule,ReactiveFormsModule, recipesRoutes],
    declarations:[RecipesComponent, RecipeListComponent, RecipeItemComponent, RecipedetailComponent, RecipeStartComponent, RecipeEditComponent],
    exports: [RecipesComponent],
    providers: [RecipeService]
})
export class RecipesModule{}