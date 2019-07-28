import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-a-home',
  templateUrl: './a-home.component.html',
  styleUrls: ['./a-home.component.css']
})
export class AHomeComponent implements OnInit {

  mostrarSidebar:boolean=true;

  public userMostrado = localStorage.getItem('ROL');

  constructor(private router: Router) { }

  ngOnInit() {
  }
mostrarUser(){
  return this.userMostrado;
}
redirectHome(){
  localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER");
    localStorage.removeItem("ROL");
  this.router.navigateByUrl('/home/login');
}

  ocultarSidebar(){
    if(this.mostrarSidebar==true){
      this.mostrarSidebar=false;
    }else{
      this.mostrarSidebar=true;
    }
  }
}
