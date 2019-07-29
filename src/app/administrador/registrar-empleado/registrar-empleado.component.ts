import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/servicio/producto.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IRegistrarEmpleado } from './IRegistrarEmpleado';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  formEmpleado: FormGroup;

  constructor(
    private router: Router,
    public productService: ProductoService,
    private formBuilder: FormBuilder) {

    this.formEmpleado = this.formBuilder.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rol: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  guardarEmpleado(empleado: IRegistrarEmpleado) {
    console.log(empleado);
    this.productService.saveLogin(empleado).subscribe(() => {
       return this.productService.getEmpleado().subscribe((res: any[]) =>{
         this.productService.empleados = res;
       },
       err => console.log(err));
    })
  }
  guardarLogin(empleado: IRegistrarEmpleado) {
    console.log(empleado);
    this.productService.saveEmpleado(empleado).subscribe(() => {
       return this.productService.getEmpleado().subscribe((res: any[]) =>{
         this.productService.empleados = res;
       },
       err => console.log(err));
    })
  }
  saveEmpleado() {    
    this.guardarEmpleado(this.formEmpleado.value);
    this.guardarLogin(this.formEmpleado.value);
    this.router.navigate(['administrador/vacio']);
    console.log(this.formEmpleado.value);
  }

}
