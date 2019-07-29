import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicio/producto.service';
import { IPedido } from 'src/app/IPedido';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-a-listar-pedidos',
  templateUrl: './a-listar-pedidos.component.html',
  styleUrls: ['./a-listar-pedidos.component.css'],
  providers: [ DatePipe ]
})
export class AListarPedidosComponent implements OnInit {

  formPedido: FormGroup;
  detalle= [
    {nombre:'Brasileria',
    categoria:'Tortas',
    precio:5000},
    {nombre:'Queso Camarón',
    categoria:'Empanadas',
    precio:2500},
  ]
  constructor( private productService: ProductoService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder 
    ) {
      this.formPedido = this.formBuilder.group({
        nombre:[{value: '',disabled:true} , [Validators.required]],
        rut:[{value: '',disabled:true} , [Validators.required,Validators.maxLength(12)]],
        telefono:[{value: '',disabled:true} , [Validators.required,Validators.pattern('[1-9]{1}[0-9]{8}')]],
        direccion: [{value: '',disabled:true} , ],
        mail:[{value: '',disabled:true} , [Validators.email]],
        modo_entrega: [{value: '',disabled:true} , [Validators.required]],
        fecha_inicio: [{value: '',disabled:true} , ],
        fecha_entrega: ['',],
        fecha_pago: [{value: ''}  ],
        valor_total: [{value: '',disabled:true} ],
        metodo_pago: [{value: '',disabled:true} , [Validators.required]],
        estado: [{value:''}], 
      });
        
    
   }

  public pedidos : IPedido[]=[];
  private id: number;

  llenarDatos(pedido: IPedido){

    this.id=pedido.id;

    this.formPedido.setValue({
      nombre: pedido.nombre,
      rut:pedido.rut,
      mail: pedido.mail,
      telefono:pedido.telefono,
      direccion:pedido.direccion,
      modo_entrega: pedido.modo_entrega,
      fecha_inicio: this.datePipe.transform(pedido.fecha_inicio,'yyyy-MM-dd'),
      fecha_entrega: this.datePipe.transform(pedido.fecha_entrega,'yyyy-MM-dd'),
      fecha_pago: this.datePipe.transform(pedido.fecha_pago,'yyyy-MM-dd'),
      valor_total: pedido.valor_total,
      metodo_pago: pedido.metodo_pago,
      estado: pedido.estado, 
    });
  
  }
  ngOnInit() {
    this.productService.getPedidos().subscribe((res: any[]) => {
      this.pedidos = res;
      });
  }

  guardarPedido(pedido: IPedido) {

    /* hace la peticion a la bdd */
    this.productService.updatePedido(this.id,pedido).subscribe((res: any[]) => {
      alert('Su pedido ha sido actualizado correctamente')
      },err => console.log(err));  
  }

  saveData(){
    //modificar la fecha antes de enviar el pedido...
    this.formPedido.setValue({
      nombre: this.formPedido.getRawValue().nombre,
      rut:this.formPedido.getRawValue().rut,
      mail: this.formPedido.getRawValue().mail,
      telefono:this.formPedido.getRawValue().telefono,
      direccion:this.formPedido.getRawValue().direccion,
      modo_entrega: this.formPedido.getRawValue().modo_entrega,
      fecha_inicio: this.formPedido.getRawValue().fecha_inicio,
      fecha_entrega: this.formPedido.getRawValue().fecha_entrega,
      fecha_pago: this.formPedido.getRawValue().fecha_pago,
      valor_total: this.formPedido.getRawValue().valor_total,
      metodo_pago: this.formPedido.getRawValue().metodo_pago,
      estado: this.formPedido.getRawValue().estado,
    });
    this.guardarPedido(this.formPedido.getRawValue());
    this.productService.getPedidos().subscribe((res: any[]) => {
      this.pedidos = res;
      },error=>console.log(error)
      );
  }
  llenarTablas(pedido:IPedido){
    this.productService.getDetallePedido(pedido.id).subscribe((res:any[])=>{
      this.detalle=res;
    },error=>console.log(error))
  }

}
