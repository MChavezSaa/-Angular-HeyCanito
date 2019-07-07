import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HeyCanito3';
  categoria = "torta";
  test:string = "empanada";

  prueba(value:string):void{
    this.test=value;
    
  }
}
