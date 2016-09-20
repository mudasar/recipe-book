import {Component, OnInit, Input, OnChanges, EventEmitter} from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: []
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() item :Ingredient;
  isAdd : boolean = true;
  @Output('cleared') cleared = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    if (changes.item.currentValue === null){
      this.isAdd = true;
      this.item = new Ingredient(null,null);
    }else{
      this.isAdd = false;
    }
  }

  onSubmit(value: Ingredient){
    const newIngredient =  new Ingredient(value.name, value.amount);
    if (!this.isAdd){
      //edit
      this.shoppingListService.editItem(this.item,newIngredient);
      this.onClear();
    }else{
      this.item = newIngredient;
      this.shoppingListService.addItem(this.item);
    }
  }

  onDelete(){
    this.shoppingListService.deleteItem(this.item);
    this.onClear();
  }

  onClear(){
    this.isAdd = true;
    this.cleared.emit(null);
  }



}
