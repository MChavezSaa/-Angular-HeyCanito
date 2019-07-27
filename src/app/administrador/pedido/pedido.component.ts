import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../servicio/producto.service';
import { IPedido } from '../../IPedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  formProduct: FormGroup;

  constructor(private router: Router,
    public productService: ProductoService,
    private formBuilder: FormBuilder) {

    this.formProduct = this.formBuilder.group({
      modo_entrega: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      fecha_entrega: ['', [Validators.required]],
      fecha_pago: ['', [Validators.required]],
      valor_total: ['', [Validators.required]],
      metodo_pago: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  guardarPedido(pedido: IPedido) {
    console.log(pedido);    
    this.productService.savePedido(pedido).subscribe(() => {
      return this.productService.getProducts().subscribe((res: any[]) => {
        this.productService.products = res;
      },
        err => console.log(err));
    })
  }

  saveData() {
    this.guardarPedido(this.formProduct.value);
    this.router.navigate(['home']);
    console.log(this.formProduct.value);
  }

}
