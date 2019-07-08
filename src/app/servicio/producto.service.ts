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
    return this.http.post<Iproduct[]>('http://localhost:3000/producto', product);
  }
  deleteProduct(id){
    return this.http.delete('http://localhost:3000/producto/'+ id );
  }
  updateProduct(id, product){
    return this.http.put('http://localhost:3000/producto/'+ id, product);
  }
  getOpinion(): Observable<IOpinion[]> {
    return this.http.get<IOpinion[]>('http://localhost:3005/opinion').pipe(map((res: any) => res.data));
  }
}
