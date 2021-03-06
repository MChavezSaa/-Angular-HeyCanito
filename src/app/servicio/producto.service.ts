import { Injectable } from '@angular/core';
import { Iproduct } from '../producto';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { IOpinion } from '../opnion';
import { IRegistroCliente } from '../cliente/c-registrar-cliente/IRegitroCliente';
import { IRegistrarEmpleado } from '../administrador/registrar-empleado/IRegistrarEmpleado';
import { IPedido } from '../IPedido';
import { IDetalle } from '../IDetalle';
import { User } from '../cliente/user';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public filteredProducts: Iproduct[];
  public products: Iproduct[];
  public empleados: IRegistrarEmpleado[];
  public clientes: IRegistroCliente[];
  public bolsa: Iproduct[] = [];

  public opinion: IOpinion[];
  public pedido: IPedido[];


  URL:string='http://localhost:3005';
  //private URL = 'http://colvin.chillan.ubiobio.cl:3004';

  constructor(private http: HttpClient) { }

  /* DETALLE PEDIDO */
  agregarDetalle(detalle: IDetalle) {
    return this.http.post<any[]>(this.URL + '/detallepedido', detalle);
  }
  getRol(): Observable<User[]> {
    return this.http.get<User[]>(this.URL + '/UserLogin').pipe(map((res: any) => res.data));
  }
  /*PEDIDOS */
  getPedidosCliente(user: string) {
    return this.http.get<IPedido[]>(this.URL + '/pedidosClientes/' + user).pipe(map((res: any) => res.data));
  }
  getDetallePedido(id: number) {
    return this.http.get<Iproduct[]>(this.URL + '/detallePedido/' + id).pipe(map((res: any) => res.data));
  }
  saveLogin(empleado: IRegistrarEmpleado) {
    return this.http.post<IRegistrarEmpleado[]>(this.URL + '/saveLogin', empleado);
  }

  savePedido(pedido: IPedido) {
    return this.http.post<IPedido[]>(this.URL + '/pedido', pedido);
  }
  getPedido(id: number): Observable<IPedido[]> {
    return this.http.get<IPedido[]>(this.URL + '/pedido/' + id).pipe(map((res: any) => res.data));
  }
  getPedidos(): Observable<IPedido[]> {
    return this.http.get<IPedido[]>(this.URL + '/pedidos').pipe(map((res: any) => res.data));
  }
  updatePedido(id, pedido) {
    return this.http.put(this.URL + '/pedido/' + id, pedido);
  }

  /*EMPLEADOS */
  saveEmpleado(empleado: IRegistrarEmpleado) {
    return this.http.post<IRegistrarEmpleado[]>(this.URL + '/empleado', empleado);
  }
  getEmpleado(): Observable<IRegistrarEmpleado[]> {
    return this.http.get<IRegistrarEmpleado[]>(this.URL + '/empleado').pipe(map((res: any) => res.data));
  }

  /*CLIENTES */
  saveCliente(cliente: IRegistroCliente) {
    return this.http.post<IRegistroCliente[]>(this.URL + '/cliente', cliente);
  }
  getCliente(): Observable<IRegistroCliente[]> {
    return this.http.get<IRegistroCliente[]>(this.URL + '/cliente').pipe(map((res: any) => res.data));
  }

  /*PRODUCTOS */
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.URL + '/productos').pipe(map((res: any) => res.data));
  }
  getCategoria(categoria: string): Observable<Iproduct[]> {
    console.log(categoria);
    return this.http.get<Iproduct[]>(this.URL + '/producto/categoria/' + categoria).pipe(map((res: any) => res.data));
  }
  getProductoID(id: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.URL + '/producto/' + id).pipe(map((res: any) => res.data));
  }
  saveProduct(product: Iproduct) {
    return this.http.post<Iproduct[]>(this.URL + '/producto', product);
  }
  deleteProduct(id) {
    return this.http.delete(this.URL + '/producto/' + id);
  }
  updateProduct(id, product) {
    return this.http.put(this.URL + '/producto/' + id, product);
  }
  /* OPINION */
  getOpinion(): Observable<IOpinion[]> {
    return this.http.get<IOpinion[]>(this.URL + '/opinion').pipe(map((res: any) => res.data));
  }
  saveOpinion(opinion: IOpinion) {
    return this.http.post<IOpinion[]>(this.URL + '/opinion', opinion);
  }
  /** Agrega un producto a la bolsa */
  agregarProducto(producto: Iproduct) {
    var datos: Iproduct = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      categoria: producto.categoria,
      imagen: producto.imagen,
      cantidad_personas: producto.cantidad_personas,
      tiempo_produccion: producto.tiempo_produccion
    };

    this.bolsa.push(datos);

  }
  login(email: string, password: string) {
    let userLogin = {
      Email: email,
      password: password
    }
    return this.http.post(this.URL + '/login', userLogin).pipe(map((res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('usuario', JSON.stringify(res.usuario));
      return res;
    }))
  }

  precioBolsa(): number {
    let precio = 0;
    for (let prod of this.bolsa) {
      precio += prod.precio;
    }
    return precio;
  }


}
