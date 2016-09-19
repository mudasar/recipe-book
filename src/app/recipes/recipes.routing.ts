import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {RecipesComponent} from "./recipes.component";

const routing = [
    {
        path:'recipes', component:RecipesComponent
    }
];

export const recipesRoutes: ModuleWithProviders = RouterModule.forChild(routing);