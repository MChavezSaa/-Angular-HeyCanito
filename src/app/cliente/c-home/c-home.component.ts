import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';

@Component({
  selector: 'app-c-home',
  templateUrl: './c-home.component.html',
  styleUrls: ['./c-home.component.css']
})
export class CHomeComponent implements OnInit {

  constructor(public productService: ProductoService) { }

  ngOnInit() {
    this.productService.getOpinion().subscribe((res: any[]) => {
      this.productService.opinion = res;
    })
  }

}
