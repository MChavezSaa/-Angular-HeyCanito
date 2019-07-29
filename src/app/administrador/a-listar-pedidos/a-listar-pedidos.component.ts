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
      fecha_inicio: this.datePipe.transform(pedido.fecha_inicio,'dd-MM-yyyy'),
      fecha_entrega: this.datePipe.transform(pedido.fecha_entrega,'dd-MM-yyyy'),
      fecha_pago: this.datePipe.transform(pedido.fecha_pago,'dd-MM-yyyy'),
      valor_total: pedido.valor_total,
      metodo_pago: pedido.metodo_pago,
      estado: pedido.estado, 
    });
    console.log("Llenar DAtos");
    console.log(this.formPedido.value);
    console.log(this.formPedido.getRawValue());
    console.log("raw form");

    console.log(this.formPedido.getRawValue().nombre);

    
  
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

    console.log("raw form");

    console.log(this.formPedido.getRawValue().nombre);



    /*
    this.guardarPedido(this.formPedido.getRawValue());
    */
    this.productService.getPedidos().subscribe((res: any[]) => {
      this.pedidos = res;
      });
  }

}
