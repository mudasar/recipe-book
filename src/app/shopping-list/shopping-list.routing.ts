import {ShoppingListComponent} from "./shopping-list.component";
import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
const routing = [{
   path: "shopping-list", component: ShoppingListComponent
}];

export const shoppingRoutes: ModuleWithProviders = RouterModule.forChild(routing);