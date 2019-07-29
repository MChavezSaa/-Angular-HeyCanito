import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../producto';
import { ProductoService} from '../../servicio/producto.service';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-registrar-productos',
  templateUrl: './a-registrar-productos.component.html',
  styleUrls: ['./a-registrar-productos.component.css']
})

export class ARegistrarProductosComponent implements OnInit {

  formProduct: FormGroup;

  constructor(
    private router: Router,
    public productService: ProductoService,
    private formBuilder: FormBuilder) {
      
    this.formProduct = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      cantidad_personas: ['', [Validators.required]],
      tiempo_produccion: ['', [Validators.required]],
      imagen: ['']
    });
  }

  ngOnInit() {
  }

  guardarProducto(producto: Iproduct) {
    console.log(producto);
    this.productService.saveProduct(producto).subscribe(() => {
       return this.productService.getProducts().subscribe((res: any[]) =>{
         this.productService.products=res;
       },
       err => console.log(err));
    })
  }
  
  saveData() {
    this.guardarProducto(this.formProduct.value);
    this.router.navigate(['administrador/listarProductos']);
    console.log(this.formProduct.value);
  }
}
