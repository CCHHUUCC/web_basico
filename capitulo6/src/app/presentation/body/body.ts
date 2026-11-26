import { Component, signal, WritableSignal } from '@angular/core';
import { Product } from '../../domain/entities';
import { Productcard } from '../productcard/productcard';

@Component({
  imports: [Productcard],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  products:WritableSignal<Product[]> = signal([
    {name: "agua", brand: "epura", price: 10, description: "Agua pura de manantial"},
    {name: "agua mineral", brand: "topochico", price: 15, description: "Agua con burbujas"},
    {name: "cerveza", brand:"Corona", price: 45, description: "Todo con medida"}
  ]);

  deleteProduct(name:string){
    this.products.set(
      this.products().filter(t=>t.name != name)
    )
  }
}
