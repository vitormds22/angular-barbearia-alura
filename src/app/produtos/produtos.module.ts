import { ProductCardComponent } from './product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  exports: [
    ProdutosComponent
  ]
})
export class ProdutosModule { }
