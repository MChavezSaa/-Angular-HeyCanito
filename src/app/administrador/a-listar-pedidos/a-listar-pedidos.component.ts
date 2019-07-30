
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, NgZone } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service'
import { IPedido } from './../../IPedido';


@Component({
  selector: 'app-a-listar-pedidos',
  templateUrl: './a-listar-pedidos.component.html',
  styleUrls: ['./a-listar-pedidos.component.css'],
  providers: [ DatePipe ]
})
export class AListarPedidosComponent implements OnInit {

  formPedido: FormGroup;
  detalle:any[];
  latitude: number =-36.604497;
  longitude: number = -72.080858;
  zoom: number = 15 ;
  address: string;
  direccion: string;
  public query: string;
  public position: string;
  public locations: Array<any>;
  private geocoder;
  constructor( private productService: ProductoService,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder ,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
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
      console.log('llenarTablas');
      
      console.log(res);
      
      this.detalle=res;
    },error=>console.log(error))
  }
  mostrarMapa(address: string){
    //var address = "Comandante Jorge Lama Lama, Chillan, Chillán, Chile";
    console.log(address);
    this.direccion= address;
    this.geocoder = new google.maps.Geocoder();
    if(address.length!=0){
      this.geocoder.geocode({ 'address': address }, (results, status) => {
        this.latitude = results[0].geometry.location.lat();
       this.longitude = results[0].geometry.location.lng();
       this.zoom = 15;
       //console.log("lat: " + latitude + ", long: " + longitude);
       });
    }else{
      this.latitude=-36.604497;
      this.longitude=-72.080858;
    }
     
  }
}
