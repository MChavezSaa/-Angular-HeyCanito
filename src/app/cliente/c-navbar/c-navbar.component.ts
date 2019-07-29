import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-c-navbar',
  templateUrl: './c-navbar.component.html',
  styleUrls: ['./c-navbar.component.css']
})
export class CNavbarComponent implements OnInit,OnChanges {
  @Input() test: boolean = true;

  nombre: boolean;
  constructor(private authService: AuthService,public router:Router ) { }
  
  ngOnInit() {
    //if(this.test===false){
     // this.test=true;
    //}
  }

 ngOnChanges(){
    
  }

  iniciarSesion():void{
    if(this.test==false){
      this.router.navigate(['/home/login']);
    }else{
      this.authService.logout();
      this.test=false;
      this.router.navigate(['/home']);

    }
  }
}
