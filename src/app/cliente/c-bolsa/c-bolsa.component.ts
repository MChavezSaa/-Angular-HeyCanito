import { Component, OnInit } from '@angular/core';
import { IBolsa } from './IBolsa';

@Component({
  selector: 'app-c-bolsa',
  templateUrl: './c-bolsa.component.html',
  styleUrls: ['./c-bolsa.component.css']
})
export class CBolsaComponent implements OnInit {

  constructor() { }
  bolsa: IBolsa[] = [
    {
      //commit
      nombre: 'Torta fondant',
      descripcion: 'Torta fondant',
      cantidad: 10,
      precio: 18000,
      url: 'http://annaspasteleria.com/wp-content/uploads/2018/10/29-2483-post/DSC_0143web.jpg'
    },
    {
      nombre: 'Torta de manjar',
      descripcion: 'Torta de manjar',
      cantidad: 15,
      precio: 15000,
      url: 'https://www.gourmet.cl/wp-content/uploads/2017/05/torta-choc-manjar-editada.jpg'
    },
    {
      nombre: 'Torta mil hojas',
      descripcion: 'Torta mil hojas',
      cantidad: 15,
      precio: 15000,
      url: 'https://www.gourmet.cl/wp-content/uploads/2017/02/16.jpg'
    }
  ];

  ngOnInit() {
  }
}