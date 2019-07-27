import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { Iproduct } from '../../producto';
import { ActivatedRoute, Params } from '@angular/router';
import { IBolsa } from '../../IBolsa';
import {Router} from "@angular/router";
import { IPedido } from 'src/app/IPedido';

@Component({
  selector: 'app-c-catalogo-detalle',
  templateUrl: './c-catalogo-detalle.component.html',
  styleUrls: ['./c-catalogo-detalle.component.css']
})
export class CCatalogoDetalleComponent implements OnInit, OnChanges {
  id: string;
  bolsa: IBolsa[];
  prod: Iproduct[]= [];


  constructor(public productService: ProductoService,private rutaActiva: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.id= this.rutaActiva.snapshot.params.id;
    this.productService.getCategoria(this.id).subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
    })
  }
  ngOnChanges(): void {
    /*this.id= this.rutaActiva.snapshot.params.id;
     console.log(this.id);
    this.productService.getCategoria(this.id).subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
      console.log(this.productService.products);
    })*/
  }
  redireccionProducto(ide:string){
    this.router.navigate(['home/catalogo/detalleProducto/', ide]);
  }
 
  
}
  
