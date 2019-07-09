import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/producto';
import { ProductoService} from '../../servicio/producto.service';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-a-registrar-productos',
  templateUrl: './a-registrar-productos.component.html',
  styleUrls: ['./a-registrar-productos.component.css']
})

export class ARegistrarProductosComponent implements OnInit {

  formProduct: FormGroup;

  constructor(
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
  
  crearProducto(){
    let datos: any= this.formProduct.value;

    this.guardarProducto(datos);
  }

  saveData() {
    this.guardarProducto(this.formProduct.value);
    console.log(this.formProduct.value);
  }
}
