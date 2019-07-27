import { Injectable } from '@angular/core';
import { Iproduct } from '../producto';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { IOpinion } from '../opnion';
import { IRegistroCliente } from '../cliente/c-registrar-cliente/IRegitroCliente';
import { IRegistrarEmpleado } from '../administrador/registrar-empleado/IRegistrarEmpleado';
import { IPedido } from '../administrador/pedido/IPedido';
import { User } from '../cliente/user';
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

  private URL = 'http://colvin.chillan.ubiobio.cl:3004';

  getRol(): Observable<User[]> {
    return this.http.get<User[]>(this.URL +'/UserLogin').pipe(map((res: any) => res.data));
  }

  savePedido(empleado: IPedido){
    return this.http.post<IPedido[]>(this.URL+'/pedido', empleado);
  }
  getPedido(): Observable<IPedido[]> {
    return this.http.get<IPedido[]>(this.URL+'/pedido').pipe(map((res: any) => res.data));
  }


  saveEmpleado(empleado: IRegistrarEmpleado){
    return this.http.post<IRegistrarEmpleado[]>(this.URL+'/empleado', empleado);
  }
  getEmpleado(): Observable<IRegistrarEmpleado[]> {
    return this.http.get<IRegistrarEmpleado[]>(this.URL+'/empleado').pipe(map((res: any) => res.data));
  }

  saveCliente(cliente: IRegistroCliente){
    return this.http.post<IRegistroCliente[]>(this.URL+'/cliente', cliente);
  }
  getCliente(): Observable<IRegistroCliente[]> {
    return this.http.get<IRegistroCliente[]>(this.URL+'/cliente').pipe(map((res: any) => res.data));
  }

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.URL+'/productos').pipe(map((res: any) => res.data));
  }
  getCategoria( categoria:string): Observable<Iproduct[]> {
    console.log(categoria);
    return this.http.get<Iproduct[]>(this.URL+'/producto/categoria/'+ categoria).pipe(map((res: any) => res.data));
  }
  getProductoID( id:string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.URL+'/producto/'+ id).pipe(map((res: any) => res.data));
  }
  saveProduct(product: Iproduct){
    return this.http.post<Iproduct[]>(this.URL+'/producto', product);
  }
  deleteProduct(id){
    return this.http.delete(this.URL+'/producto/'+ id );
  }
  updateProduct(id, product){
    return this.http.put(this.URL+'/producto/'+ id, product);
  }

  getOpinion(): Observable<IOpinion[]> {
    return this.http.get<IOpinion[]>(this.URL+'/opinion').pipe(map((res: any) => res.data));
  }
  saveOpinion(opinion: IOpinion) {
    return this.http.post<IOpinion[]>(this.URL+'/opinion', opinion);
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
  login(email: string, password:string){
    let userLogin ={
      Email: email,
      password: password
    }
    return this.http.post(this.URL+'/login', userLogin).pipe(map((res:any)=>{
      localStorage.setItem('token', res.token);
      localStorage.setItem('usuario', JSON.stringify(res.usuario));
      return res;
    }))
  }

  
}
