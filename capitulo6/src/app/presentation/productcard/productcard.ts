import { Component, input, output } from '@angular/core';
import { Product } from '../../domain/entities';

@Component({
  imports: [],
  selector: 'app-productcard',
  styleUrl: './productcard.css',
  templateUrl: './productcard.html',
})
export class Productcard {

  //El componente product card debe de recivir un producto
  product=input<Product>();

  //emite el nombre del producto que deseo eliminar
  nameDelete=output<string>();


  emitProductName(){
    this.nameDelete.emit(this.product()?.name??"");
      console.log(this.product()?.name);
  }


  
  

}
