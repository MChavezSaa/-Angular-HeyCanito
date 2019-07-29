import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../servicio/producto.service';

@Component({
  selector: 'app-c-ver-pedido',
  templateUrl: './c-ver-pedido.component.html',
  styleUrls: ['./c-ver-pedido.component.css']
})
export class CVerPedidoComponent implements OnInit {


  
  constructor(public productService: ProductoService,
    private rutaActiva: ActivatedRoute, 
    private router: Router) { }

  estados  = ['Bolsa de compras','Generado','Aprobado','Listo para entrega', 'Entregado'];
  clases:string[];

  ngOnInit() {
    let id= this.rutaActiva.snapshot.params.id;
    console.log("id: "+id);
    /* obteniendo los datos del pedido */
    this.productService.getPedido(id).subscribe((res: any[]) => {
      this.productService.pedido = res;
      this.productService.filteredProducts = res;
      this.clases = this.cambiandoClass();
    });
    /* obteniendo los productos del pedido */
    this.productService.getDetallePedido(id).subscribe((res: any[]) => {
      this.productService.products = res;
      console.log('this.productServi.pedido');
      
      console.log(this.productService.pedido);
      this.clases = this.cambiandoClass();
    });
  }

  cambiandoClass():string[]{
    let clases = [];
    if(this.productService.pedido.length){
      console.log(this.productService.pedido);
      let flag=true;
      for ( let item of this.estados) {
        if(flag){ clases.push('active')}
        if(item==this.productService.pedido[0].estado){
          flag=false;
        }
      }
    }else{
      this.router.navigate(['home/pedido/x/error']);
    }
    return clases;
  }

}
