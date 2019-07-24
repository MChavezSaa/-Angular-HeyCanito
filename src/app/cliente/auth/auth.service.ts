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

  AUTH_SERVER: string ='http://localhost:3005';
  authSubject = new BehaviorSubject(false);
  private token : string;
  constructor(private httpClient: HttpClient) { }

  login (user: User): Observable<IJwtResponse>{
    return this.httpClient.post<IJwtResponse>(`${this.AUTH_SERVER}/login`,
     user).pipe(tap(
      (res: IJwtResponse)=>{
        if(res){
          //guardar token  email==user
          this.saveToken(res.email, res.accessToken);
        }
      })
    );
  }
  
  logout(){
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }
  private saveToken(EMAIL:string, expiresIn: string):void {
    localStorage.setItem("ACCESS_TOKEN", EMAIL);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token= EMAIL;
  }
  private getToken(): string{
    if(!this.token){
      this.token = localStorage.getItem("ACCCESS_TOKEN");
    }
    return this.token;
  }

}
