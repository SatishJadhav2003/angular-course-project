import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],

  imports: [RouterModule.forChild(
    [
      { path: '', component: ShoppingListComponent }]
  ), SharedModule, ReactiveFormsModule,FormsModule],
  // exports:[ShoppingListComponent, ShoppingEditComponent]
})
export class ShoppingListModule {}
