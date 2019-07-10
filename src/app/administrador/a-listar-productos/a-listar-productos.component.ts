import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { Iproduct } from '../../producto';


@Component({
  selector: 'app-a-listar-productos',
  templateUrl: './a-listar-productos.component.html',
  styleUrls: ['./a-listar-productos.component.css']
})
export class AListarProductosComponent implements OnInit {
eliminar: Iproduct;

  constructor(public productoService: ProductoService) { }
  ngOnInit() {
    this.productoService.getProducts().subscribe((res: any[]) => {
    this.productoService.products = res;
    this.eliminar= this.productoService.products[0];
    })
  }
 
  deleteProduct(id: number) {
    this.productoService.deleteProduct(id).subscribe(
      (res: any[]) => {
      return this.productoService.getProducts().subscribe(
        (res: any[]) => {
          this.productoService.products = res;
        },
        err => console.log(err))

      });
  }
  preguntaEliminar(dato: Iproduct){
  this.eliminar =dato;
  console.log(this.eliminar);
  }
}
