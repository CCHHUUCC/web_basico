import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Arma } from './domain/entities';
import { changeAbout } from './aplication/use_case_user';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  arma1:Arma = {
    nombre: "FX-05 Xiuhcóatl",
    fabricante: "Dirección General de Industria Militar de México",
    calibre: "5.56mm",
    cargador: "extraíble recto, de 30 a 60 balas",
    alcance: "200 a 800 m con miras mecánicas",
    variantes: "Carabina y Fusil" 
};

executeAction(arma:Arma){
  changeAbout(arma);
}

changeNameUpper(){
  this.arma1.nombre=this.arma1.nombre.toUpperCase();
}
changeNameLower(){
  this.arma1.nombre=this.arma1.nombre.toLowerCase();
}

}
