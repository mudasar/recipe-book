import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RecipesComponent} from "./recipes.component";
import { RecipeStartComponent} from "./recipe-start.component";
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const routing = [
    {
        path:'recipes', component:RecipesComponent, children:[
        {
            path:'', component: RecipeStartComponent
        },
        {
            path: 'new', component: RecipeEditComponent
        },
        {
            path: ':id', component: RecipedetailComponent
        },
        {
            path: ':id/edit', component: RecipeEditComponent
        }
    ]
    }


];

export const recipesRoutes: ModuleWithProviders = RouterModule.forChild(routing);