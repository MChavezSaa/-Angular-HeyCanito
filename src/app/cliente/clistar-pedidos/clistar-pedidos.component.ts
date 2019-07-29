import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';

@Component({
  selector: 'app-clistar-pedidos',
  templateUrl: './clistar-pedidos.component.html',
  styleUrls: ['./clistar-pedidos.component.css']
})
export class ClistarPedidosComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  estados  = ['Bolsa de compras','Generado','Aprobado','Listo para entrega', 'Entregado'];
  clases:string[];

  ngOnInit() {
    this.productoService.getPedidosCliente(localStorage.getItem("USER")).subscribe((res: any[]) => {
      
      this.productoService.pedido = res;
      console.log(this.productoService.pedido);
      this.clases = this.cambiandoClass();
    });
   
  }
  llenarDetalle(id: number){
    this.productoService.getDetallePedido(id).subscribe((res: any[]) => {
      this.productoService.products = res;
    })
  }

  
  cambiandoClass():string[]{
    let clases = [];
    if(this.productoService.pedido.length){
      console.log(this.productoService.pedido);
      let flag=true;
      for ( let item of this.estados) {
        if(flag){ clases.push('active')}
        if(item==this.productoService.pedido[0].estado){
          flag=false;
        }
      }
    }
    return clases;
  }

}
