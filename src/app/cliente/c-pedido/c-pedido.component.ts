
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicio/producto.service';
import { IPedido } from '../../IPedido';
import { Iproduct } from 'src/app/producto';
import { log } from 'util';
import { IDetalle } from 'src/app/IDetalle';

@Component({
  selector: 'app-c-pedido',
  templateUrl: './c-pedido.component.html',
  styleUrls: ['./c-pedido.component.css']
})
export class CPedidoComponent implements OnInit {
  
  formProduct: FormGroup;

  bolsa: Iproduct[];
  pedido: IPedido

  constructor(
    private router: Router,
    public productService: ProductoService,
    
    private formBuilder: FormBuilder )
      { /**para el formulario */
      const dateLength = 10;
      const today = new Date().toISOString().substring(0, dateLength);

      this.formProduct = this.formBuilder.group({
        nombre:['',[Validators.required]],
        rut:['',[Validators.required,Validators.maxLength(12)]],
        telefono:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{8}')]],
        direccion: ['', ],
        mail:['',[Validators.email, Validators.required]],
        modo_entrega: ['', [Validators.required]],
        fecha_inicio: [today,],
        fecha_entrega: ['',],
        fecha_pago: ['',],
        valor_total: [0,],
        metodo_pago: ['', [Validators.required]],
        estado: ['Bolsa de compras',], 
      });

      //this.bolsa=this.productService.bolsa;
      }

 


  ngOnInit() {

  }
  /* Suma el precio de los productos en la bolsa */
  calcularTotal():number{
    let total=0;
    if(this.bolsa){
      for (let prod of this.bolsa) {
        total+=prod.precio;
      }
    }else{
      this.bolsa= this.productService.bolsa;
    }
    return total;
  }

  /* genera el pedido */
  guardarPedido(pedido: IPedido) {
    console.log(pedido);    //agregar cosas
    /* hace la peticion a la bdd */
    this.productService.savePedido(pedido).subscribe((res: any[]) => {
      this.productService.getPedido(res.datos.insertId).subscribe((res2: any[])=>{
        this.productService.pedido=res2[0];
        
        },err => console.log(err))
        /* agregar cada detalle */
        if(this.bolsa){
          let cantidad=1; 
          for (let prod of this.bolsa) {
            let detalle:IDetalle = {
              id_pedido: res.datos.insertId,
              id_producto: prod.id,
              cantidad_producto: cantidad
            }
            console.log(detalle);
            this.productService.agregarDetalle(detalle)
              .subscribe((res3:any[])=>{console.log(res3);},err => console.log(err));     
          }
        }
      },err => console.log(err));
    
      
      console.log(this.productService.pedido);
      
      

  }
  /**Guarda el formulario del pedido */
  saveData() {

    this.bolsa=this.productService.bolsa;   
    this.formProduct.setValue({
      nombre: this.formProduct.get('nombre').value,
      rut:this.formProduct.get('rut').value,
      mail: this.formProduct.get('mail').value,
      telefono:this.formProduct.get('telefono').value,
      direccion:this.formProduct.get('direccion').value,
      modo_entrega: this.formProduct.get('modo_entrega').value,
      fecha_inicio: this.formProduct.get('fecha_inicio').value,
      fecha_entrega: null,
      fecha_pago: null,
      valor_total: this.calcularTotal(),
      metodo_pago: this.formProduct.get('metodo_pago').value,
      estado: 'Generado', 
    });
    this.guardarPedido(this.formProduct.value);
    //redireccionamiento a home
    //this.router.navigate(['home']);
    
  }
}
