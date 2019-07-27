import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { IPedido } from 'src/app/IPedido';
import { ActivatedRoute, Router } from '@angular/router';

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
    
    this.productService.getPedido(id).subscribe((res: any[]) => {
      this.productService.pedido = res;
      this.productService.filteredProducts = res;
      console.log("resultado get pedido");
      
      console.log(res);
      this.clases = this.cambiandoClass();
      
    })
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
