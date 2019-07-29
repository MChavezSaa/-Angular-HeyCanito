import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-clistar-pedidos',
  templateUrl: './clistar-pedidos.component.html',
  styleUrls: ['./clistar-pedidos.component.css']
})
export class ClistarPedidosComponent implements OnInit {

  constructor(public productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getPedidosCliente(localStorage.getItem("USER")).subscribe((res: any[]) => {
      this.productoService.pedido = res;
    });
   
  }
  llenarDetalle(id: number){
    this.productoService.getDetallePedido(id).subscribe((res: any[]) => {
      console.log(res);
      this.productoService.products = res;
    })
  }
}
