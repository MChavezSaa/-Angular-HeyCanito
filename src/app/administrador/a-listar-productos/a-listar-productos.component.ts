import { Component, OnInit} from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { Iproduct } from '../../producto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-a-listar-productos',
  templateUrl: './a-listar-productos.component.html',
  styleUrls: ['./a-listar-productos.component.css']
})
export class AListarProductosComponent implements OnInit {
  eliminar: Iproduct;
  formProduct: FormGroup;
  idProductoEditando: number;


  constructor(public productoService: ProductoService,
    private formBuilder: FormBuilder){
      
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
    this.productoService.getProducts().subscribe((res: any[]) => {
    this.productoService.products = res;
    this.eliminar= this.productoService.products[0];
    })
  }
 
  deleteProduct(id: number) {
    this.productoService.deleteProduct(id).subscribe(
      (res: any[]) => {
      return this.productoService.getProducts().subscribe(
        (res: any[]) => {
          this.productoService.products = res;
        },
        err => console.log(err))

      });
  }
  preguntaEliminar(dato: Iproduct){
  this.eliminar =dato;
  console.log(this.eliminar);
  }

  llenarDatosModalUpdate(prod: Iproduct){
    this.idProductoEditando=prod.id;
    this.formProduct.setValue({
      nombre: prod.nombre,
      precio: prod.precio,
      descripcion: prod.descripcion,
      categoria: prod.categoria,
      cantidad_personas: prod.cantidad_personas,
      tiempo_produccion: prod.tiempo_produccion,
      imagen: prod.imagen
    }) 
       
    
  }
  guardarProducto(producto: Iproduct) {
    console.log(producto);
    this.productoService.updateProduct(this.idProductoEditando,producto).subscribe(() => {
       return this.productoService.getProducts().subscribe((res: any[]) =>{
         this.productoService.products=res;
       },
       err => console.log(err));
    })
  }

  saveData() {
    /*gg imagen */
    this.formProduct.setValue({
      nombre: this.formProduct.getRawValue().nombre,
      precio: this.formProduct.getRawValue().precio,
      descripcion: this.formProduct.getRawValue().descripcion,
      categoria: this.formProduct.getRawValue().categoria,
      cantidad_personas: this.formProduct.getRawValue().cantidad_personas,
      tiempo_produccion: this.formProduct.getRawValue().tiempo_produccion,
      imagen: ""
    }) 
    console.log(this.formProduct.getRawValue());
    this.guardarProducto(this.formProduct.getRawValue());
    alert('Su producto ha sido editado correctamente')
    
  }
}


