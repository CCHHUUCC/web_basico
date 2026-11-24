import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-body',
  styleUrl: './body.css',
  templateUrl: './body.html',
})
export class Body {
  data:WritableSignal<number> = signal(0);
  dataInput:WritableSignal<string> = signal('');

  reload(){
    let numero = parseInt(this.dataInput());

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
      factorial = factorial * i;
    }

    this.data.set(factorial);
  }
}