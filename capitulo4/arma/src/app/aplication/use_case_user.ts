import { Arma } from "../domain/entities";

export function changeAbout(user:Arma):void{
    user.nombre="Texto modificado";
    
}