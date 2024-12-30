import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  botonPresionado(nombre: string) {
    console.log(`Se presionó el botón: ${nombre}`);
    alert(`Se presionó el botón: ${nombre}`);
  }
}
