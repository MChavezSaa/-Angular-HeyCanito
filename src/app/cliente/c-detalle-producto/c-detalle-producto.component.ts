import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { Iproduct } from '../../producto';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-c-detalle-producto',
  templateUrl: './c-detalle-producto.component.html',
  styleUrls: ['./c-detalle-producto.component.css']
})
export class CDetalleProductoComponent implements OnInit {
  id: string;
  constructor(public productService: ProductoService,private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.id= this.rutaActiva.snapshot.params.id;
    this.productService.getProductoID(this.id).subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;

    })
  }

}
