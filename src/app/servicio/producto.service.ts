import { Injectable } from '@angular/core';
import { Iproduct } from '../producto';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { IOpinion } from '../opnion';
import { IRegistroCliente } from '../cliente/c-registrar-cliente/IRegitroCliente';
import { IRegistrarEmpleado } from '../administrador/registrar-empleado/IRegistrarEmpleado';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public filteredProducts: Iproduct[];
  public products: Iproduct[];
  public empleados: IRegistrarEmpleado[];
  public bolsa: Iproduct[] = [];
  public opinion: IOpinion[];

  constructor(private http: HttpClient) { }

  saveEmpleado(empleado: IRegistrarEmpleado){
    return this.http.post<IRegistrarEmpleado[]>('http://localhost:3005/empleado', empleado);
  }
  getEmpleado(): Observable<IRegistrarEmpleado[]> {
    return this.http.get<IRegistrarEmpleado[]>('http://localhost:3005/empleado').pipe(map((res: any) => res.data));
  }

  saveCliente(cliente: IRegistroCliente){
    return this.http.post<IRegistroCliente[]>('http://localhost:3005/cliente', cliente);
  }
  getCliente(): Observable<IRegistroCliente[]> {
    return this.http.get<IRegistroCliente[]>('http://localhost:3005/cliente').pipe(map((res: any) => res.data));
  }

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:3005/productos').pipe(map((res: any) => res.data));
  }
  getCategoria( categoria:string): Observable<Iproduct[]> {
    console.log(categoria);
    return this.http.get<Iproduct[]>('http://localhost:3005/producto/categoria/'+ categoria).pipe(map((res: any) => res.data));
  }
  getProductoID( id:string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://localhost:3005/producto/'+ id).pipe(map((res: any) => res.data));
  }
  saveProduct(product: Iproduct){
    return this.http.post<Iproduct[]>('http://localhost:3005/producto', product);
  }
  deleteProduct(id){
    return this.http.delete('http://localhost:3005/producto/'+ id );
  }
  updateProduct(id, product){
    return this.http.put('http://localhost:3000/producto/'+ id, product);
  }

  getOpinion(): Observable<IOpinion[]> {
    return this.http.get<IOpinion[]>('http://localhost:3005/opinion').pipe(map((res: any) => res.data));
  }
  saveOpinion(opinion: IOpinion) {
    return this.http.post<IOpinion[]>('http://localhost:3005/opinion', opinion);
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
  login(email, password){
    let userLogin = { email: email, password: password};
    return this.http.post('http://localhost:3005/login', userLogin).pipe(map((res:any)=>{
      localStorage.setItem('token', res.token);
      localStorage.setItem('usuario', JSON.stringify(res.usuario));
      return res;
    }))
  }
 

}
