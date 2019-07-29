import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProductoService } from '../../servicio/producto.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {User} from '../user';



@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.css']
})
export class CLoginComponent implements OnInit {

  formLogin: FormGroup;
  user: User;
  constructor(private authService: AuthService, private router: Router,
              private formBuilder: FormBuilder,
              public productService: ProductoService) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
   } 

  ngOnInit() {
  }

  login(form: { value: any; }): void {
//    var rol:string = this.productService.getRol();
      this.authService.login(form.value).subscribe(res => {
          if(localStorage.getItem('ROL') === 'admin'){
            this.router.navigateByUrl('/administrador/listarProductos');
          }else{
            this.router.navigateByUrl('/home');
          }
        
      });
  }
 }

