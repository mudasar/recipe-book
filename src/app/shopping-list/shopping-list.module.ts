import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {shoppingRoutes} from "./shopping-list.routing";
import { ShoppingListAddComponent } from './shopping-list-add.component';
import {CommonModule} from "@angular/common";
import {ShoppingListService} from "./shopping-list.service";

@NgModule({
    imports:[CommonModule, shoppingRoutes],
    declarations:[ShoppingListComponent, ShoppingListAddComponent, ShoppingListAddComponent],
    exports:[ShoppingListComponent],
    providers: [ShoppingListService]
})
export class ShoppingListModule{

}