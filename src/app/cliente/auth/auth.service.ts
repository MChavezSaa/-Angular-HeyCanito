import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {IJwtResponse} from '../Ijwt-response';
import {tap} from 'rxjs/operators'
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_SERVER: string ='http://colvin.chillan.ubiobio.cl:3004';
  authSubject = new BehaviorSubject(false);
  private token : string;
  constructor(private httpClient: HttpClient) { }

  login (user: User): Observable<IJwtResponse>{
    return this.httpClient.post<IJwtResponse>(`${this.AUTH_SERVER}/login`,
     user).pipe(tap(
      (res: IJwtResponse)=>{
        if(res){
          console.log('rol: '+res.user[0].rol);
          //guardar token  email==user          
          this.saveToken(res.token, user.email,res.user[0].rol);
        }
      })
    );
  }
  
  logout(){
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER");
    localStorage.removeItem("ROL");
  }



  private saveToken(token:string, user: string, rol: string):void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("USER", user);
    localStorage.setItem("ROL", rol);
    this.token= token;
  }


  
  public getToken(): string{
    if(!this.token){
      this.token = localStorage.getItem("ACCCESS_TOKEN");
    }
    return this.token;
  }
  
public getne(): boolean{
  if(localStorage.getItem('USER')!= null){
   // this.logout();
    return true;
  }else{
    return false;
  }
}

}
