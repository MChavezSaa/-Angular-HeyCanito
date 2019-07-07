import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';

@Component({
  selector: 'app-c-catalogo-detalle',
  templateUrl: './c-catalogo-detalle.component.html',
  styleUrls: ['./c-catalogo-detalle.component.css']
})
export class CCatalogoDetalleComponent implements OnInit, OnChanges {
  @Input() categoria: string;
  constructor(private productService: ProductoService) { }
  ngOnInit() {
  }
  ngOnChanges(): void {
     console.log(this.categoria);
    this.productService.getCategoria(this.categoria).subscribe((res: any[]) => {
      this.productService.products = res;
      this.productService.filteredProducts = res;
      console.log(this.productService.products);
    })
  }
  
}
  
