import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProductoService } from '../../servicio/producto.service';


@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.css']
})
export class CLoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private FormBuilder: FormBuilder,public productService: ProductoService) {
    this.formLogin = this.FormBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }
  login() {
    console.log(this.formLogin.value.email);
    console.log(this.formLogin.value.password);
    this.productService.login(this.formLogin.value.user,
      this.formLogin.value.password)
      .subscribe((res: any[]) => {
        console.log(res)
        err => console.log(err)
      });
      
  }
 }

