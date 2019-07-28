import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicio/producto.service';
import { IPedido } from 'src/app/IPedido';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-a-listar-pedidos',
  templateUrl: './a-listar-pedidos.component.html',
  styleUrls: ['./a-listar-pedidos.component.css']
})
export class AListarPedidosComponent implements OnInit {

  formPedido: FormGroup;
  constructor( private productService: ProductoService,
    private formBuilder: FormBuilder 
    ) {
      this.formPedido = this.formBuilder.group({
        nombre:['',[Validators.required]],
        rut:['',[Validators.required,Validators.maxLength(12)]],
        telefono:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{8}')]],
        direccion: ['', ],
        mail:['',[Validators.email]],
        modo_entrega: ['', [Validators.required]],
        fecha_inicio: ['',],
        fecha_entrega: ['',],
        fecha_pago: ['',],
        valor_total: [0,],
        metodo_pago: ['', [Validators.required]],
        estado: ['Bolsa de compras',], 
      });
        
    
   }

  public pedidos : IPedido[]=[];

  llenarDatos(pedido: IPedido){
    this.formPedido.patchValue(pedido);
  
  }
  ngOnInit() {
    this.productService.getPedidos().subscribe((res: any[]) => {
      this.pedidos = res;
      });
    /*
      if(this.pedidos.length){
        this.formPedido = this.formBuilder.group({
          nombre:[this.pedidos[0].nombre,[Validators.required]],
          rut:[this.pedidos[0].rut,[Validators.required,Validators.maxLength(12)]],
          telefono:[this.pedidos[0].telefono,[Validators.required,Validators.pattern('[1-9]{1}[0-9]{8}')]],
          direccion: [this.pedidos[0].direccion, ],
          mail:[this.pedidos[0].mail,[Validators.email]],
          modo_entrega: [this.pedidos[0].modo_entrega, [Validators.required]],
          fecha_inicio: [this.pedidos[0].fecha_inicio,],
          fecha_entrega: [this.pedidos[0].fecha_entrega,],
          fecha_pago: [this.pedidos[0].fecha_pago,],
          valor_total: [this.pedidos[0].valor_total,],
          metodo_pago: [this.pedidos[0].metodo_pago, [Validators.required]],
          estado: [this.pedidos[0].estado,], 
        });
      }
      */
  }
  saveData(){

  }

}
