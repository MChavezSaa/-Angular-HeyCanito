import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-c-catalogo',
  templateUrl: './c-catalogo.component.html',
  styleUrls: ['./c-catalogo.component.css']
})
export class CCatalogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  prueba(value:string):void{

    this.router.navigate(['home/catalogo/',value]);
  }
}
