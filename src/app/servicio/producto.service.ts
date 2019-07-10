import { Injectable } from '@angular/core';
import { Iproduct } from '../producto';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { IOpinion } from '../opnion';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public filteredProducts: Iproduct[];
  public products: Iproduct[];
  public bolsa: Iproduct[] = [];
  public opinion: IOpinion[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:3005/productos').pipe(map((res: any) => res.data));
  }
  getCategoria( categoria:string): Observable<Iproduct[]> {
    console.log(categoria);
    return this.http.get<Iproduct[]>('http://localhost:3005/producto/categoria/'+ categoria).pipe(map((res: any) => res.data));
  }
  saveProduct(product: Iproduct){
    return this.http.post<Iproduct[]>('http://localhost:3005/producto', product);
  }
  deleteProduct(id){
    return this.http.delete('http://localhost:3000/producto/'+ id );
  }
  updateProduct(id, product){
    return this.http.put('http://localhost:3000/producto/'+ id, product);
  }


  agregarProducto( producto: Iproduct){
    console.log(producto.id);
    var datos: Iproduct = {
      id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    descripcion: producto.descripcion,
    categoria: producto.categoria,
    imagen: producto.imagen,
    cantidad_personas:producto.cantidad_personas,
    tiempo_produccion: producto.tiempo_produccion
    };
    console.log(datos);
    this.bolsa.push(datos);
    console.log(this.bolsa.toString);
  }
  getOpinion(): Observable<IOpinion[]> {
    return this.http.get<IOpinion[]>('http://localhost:3005/opinion').pipe(map((res: any) => res.data));
  }
  saveOpinion(opinion: IOpinion) {
    return this.http.post<IOpinion[]>('http://localhost:3005/opinion', opinion);
  }
}
