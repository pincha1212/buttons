import { Component } from '@angular/core';
import { BotonesComponent } from "./components/botones/botones.component";

@Component({
  selector: 'app-root',
  imports: [BotonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
