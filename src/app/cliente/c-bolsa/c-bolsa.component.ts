import { Component, OnInit } from '@angular/core';
import { IBolsa } from '../../IBolsa';
import { ProductoService } from '../../servicio/producto.service';
import { Iproduct } from '../../producto';


@Component({
  selector: 'app-c-bolsa',
  templateUrl: './c-bolsa.component.html',
  styleUrls: ['./c-bolsa.component.css']
})
export class CBolsaComponent implements OnInit {

  constructor(public productService: ProductoService) { }
  bolsa: boolean =false;
  producto: Iproduct[];


  ngOnInit() {
    this.producto = this.productService.bolsa;
    
  }
  quitarElemento(productoBolsa: Iproduct){
      this.producto.splice(this.producto.indexOf(productoBolsa),1);
  }
}