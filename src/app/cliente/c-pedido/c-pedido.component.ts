
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicio/producto.service';
import { IPedido } from '../../administrador/pedido/IPedido';
import { Iproduct } from 'src/app/producto';

@Component({
  selector: 'app-c-pedido',
  templateUrl: './c-pedido.component.html',
  styleUrls: ['./c-pedido.component.css']
})
export class CPedidoComponent implements OnInit {
  
  formProduct: FormGroup;

  bolsa: Iproduct[];

  constructor(private router: Router,
    public productService: ProductoService,
    private formBuilder: FormBuilder) {
      const dateLength = 10;
      const today = new Date().toISOString().substring(0, dateLength);
    this.formProduct = this.formBuilder.group({
      nombre:['',[Validators.required]],
      rut:['',[Validators.required,Validators.maxLength(12)]],
      telefono:['',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{8}')]],
      direccion: ['', ],
      modo_entrega: ['', [Validators.required]],
      fecha_inicio: [today,],
      fecha_entrega: ['',],
      fecha_pago: ['',],
      valor_total: [0,],
      metodo_pago: ['', [Validators.required]],
      estado: ['bolsa',], 
    });

    this.bolsa=this.productService.bolsa;

  }

 


  ngOnInit() {

  }

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
  guardarPedido(pedido: IPedido) {
    console.log(pedido);    //agregar cosas

    this.productService.savePedido(pedido).subscribe(() => {
      return this.productService.getProducts().subscribe((res: any[]) => {
        this.productService.products = res;
      },
        err => console.log(err));
    })
  }

  saveData() {

    this.bolsa=this.productService.bolsa;
    console.log(this.bolsa);
    
    console.log("--FORM_PRODUCT-antes-");
    console.log(this.formProduct.value);
   
    this.formProduct.setValue({
      nombre: this.formProduct.get('nombre').value,
      rut:this.formProduct.get('rut').value,
      telefono:this.formProduct.get('telefono').value,
      direccion:this.formProduct.get('direccion').value,
      modo_entrega: this.formProduct.get('modo_entrega').value,
      fecha_inicio: this.formProduct.get('fecha_inicio').value,
      fecha_entrega: this.formProduct.get('fecha_entrega').value,
      fecha_pago: this.formProduct.get('fecha_pago').value,
      valor_total: this.calcularTotal(),
      metodo_pago: this.formProduct.get('metodo_pago').value,
      estado: 'generado', 
    });
    console.log("--FORM_PRODUCT-despues-");
    console.log(this.formProduct.value);
    this.guardarPedido(this.formProduct.value);
    //redireccionamiento a home
    this.router.navigate(['home']);
  }
}
