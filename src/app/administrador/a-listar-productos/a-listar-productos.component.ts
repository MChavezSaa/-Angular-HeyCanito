import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-a-listar-productos',
  templateUrl: './a-listar-productos.component.html',
  styleUrls: ['./a-listar-productos.component.css']
})
export class AListarProductosComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit() {
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

}
