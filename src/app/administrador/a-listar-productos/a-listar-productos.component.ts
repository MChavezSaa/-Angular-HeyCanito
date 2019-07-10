import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';

@Component({
  selector: 'app-a-listar-productos',
  templateUrl: './a-listar-productos.component.html',
  styleUrls: ['./a-listar-productos.component.css']
})
export class AListarProductosComponent implements OnInit {

  constructor(public productService: ProductoService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((res: any[]) => {
    this.productService.products = res;
    })
  }

}
