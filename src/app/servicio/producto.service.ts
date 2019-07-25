import { Injectable } from '@angular/core';
import { Iproduct } from '../producto';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { IOpinion } from '../opnion';
import { IRegistroCliente } from '../cliente/c-registrar-cliente/IRegitroCliente';
import { IRegistrarEmpleado } from '../administrador/registrar-empleado/IRegistrarEmpleado';
import { IPedido } from '../administrador/pedido/IPedido';
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


  savePedido(empleado: IPedido){
    return this.http.post<IPedido[]>('http://colvin.chillan.ubiobio.cl:3004/pedido', empleado);
  }
  getPedido(): Observable<IPedido[]> {
    return this.http.get<IPedido[]>('http://colvin.chillan.ubiobio.cl:3004/pedido').pipe(map((res: any) => res.data));
  }


  saveEmpleado(empleado: IRegistrarEmpleado){
    return this.http.post<IRegistrarEmpleado[]>('http://colvin.chillan.ubiobio.cl:3004/empleado', empleado);
  }
  getEmpleado(): Observable<IRegistrarEmpleado[]> {
    return this.http.get<IRegistrarEmpleado[]>('http://colvin.chillan.ubiobio.cl:3004/empleado').pipe(map((res: any) => res.data));
  }

  saveCliente(cliente: IRegistroCliente){
    return this.http.post<IRegistroCliente[]>('http://colvin.chillan.ubiobio.cl:3004/cliente', cliente);
  }
  getCliente(): Observable<IRegistroCliente[]> {
    return this.http.get<IRegistroCliente[]>('http://colvin.chillan.ubiobio.cl:3004/cliente').pipe(map((res: any) => res.data));
  }

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://colvin.chillan.ubiobio.cl:3004/productos').pipe(map((res: any) => res.data));
  }
  getCategoria( categoria:string): Observable<Iproduct[]> {
    console.log(categoria);
    return this.http.get<Iproduct[]>('http://colvin.chillan.ubiobio.cl:3004/producto/categoria/'+ categoria).pipe(map((res: any) => res.data));
  }
  getProductoID( id:string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('http://colvin.chillan.ubiobio.cl:3004/producto/'+ id).pipe(map((res: any) => res.data));
  }
  saveProduct(product: Iproduct){
    return this.http.post<Iproduct[]>('http://colvin.chillan.ubiobio.cl:3004/producto', product);
  }
  deleteProduct(id){
    return this.http.delete('http://colvin.chillan.ubiobio.cl:3004/producto/'+ id );
  }
  updateProduct(id, product){
    return this.http.put('http://colvin.chillan.ubiobio.cl:3004/producto/'+ id, product);
  }

  getOpinion(): Observable<IOpinion[]> {
    return this.http.get<IOpinion[]>('http://colvin.chillan.ubiobio.cl:3004/opinion').pipe(map((res: any) => res.data));
  }
  saveOpinion(opinion: IOpinion) {
    return this.http.post<IOpinion[]>('http://colvin.chillan.ubiobio.cl:3004/opinion', opinion);
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
    return this.http.post('http://colvin.chillan.ubiobio.cl:3004/login', userLogin).pipe(map((res:any)=>{
      localStorage.setItem('token', res.token);
      localStorage.setItem('usuario', JSON.stringify(res.usuario));
      return res;
    }))
  }

  
}
