import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IBolsa } from '../../IBolsa';

@Component({
  selector: 'app-c-catalogo-detalle',
  templateUrl: './c-catalogo-detalle.component.html',
  styleUrls: ['./c-catalogo-detalle.component.css']
})
export class CCatalogoDetalleComponent implements OnInit, OnChanges {
  id: string;
  bolsa: IBolsa[];
  constructor(private productService: ProductoService,private rutaActiva: ActivatedRoute) { }
  ngOnInit() {
    this.id= this.rutaActiva.snapshot.params.id;
    console.log(this.id);
    this.productService.getCategoria(this.id).subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
      console.log(this.productService.products);
    })
  }
  ngOnChanges(): void {
    this.id= this.rutaActiva.snapshot.params.id;
     console.log(this.id);
    this.productService.getCategoria(this.id).subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
      console.log(this.productService.products);
    })
  }

  
}
  
