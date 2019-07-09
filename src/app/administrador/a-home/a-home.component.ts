import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-home',
  templateUrl: './a-home.component.html',
  styleUrls: ['./a-home.component.css']
})
export class AHomeComponent implements OnInit {

  mostrarSidebar:boolean=true;

  constructor() { }

  ngOnInit() {
  }


  ocultarSidebar(){
    if(this.mostrarSidebar==true){
      this.mostrarSidebar=false;
    }else{
      this.mostrarSidebar=true;
    }
  }
}
