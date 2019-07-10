import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IRegistroCliente } from './IRegitroCliente';
import { registroService } from 'src/app/servicio/registro.service';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-c-registrar-cliente',
  templateUrl: './c-registrar-cliente.component.html',
  styleUrls: ['./c-registrar-cliente.component.css']
})
export class CRegistrarClienteComponent implements OnInit {
  
  Registroform: FormGroup;

  constructor(
    private router: Router,
    private productService: ProductoService,
    private formBuilder: FormBuilder) {

    this.Registroform = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      apellido_paterno: ['', [Validators.required]],
      apellido_materno: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contraseña: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  guardarCliente(registro: IRegistroCliente) {
    console.log(registro);
    this.productService.saveCliente(registro).subscribe(() => {
       return this.productService.getCliente().subscribe((res: any[]) => {
         this.productService.products = res;
       },
       err => console.log(err));
    });
  }

  saveCliente() {
    this.guardarCliente(this.Registroform.value);
    this.router.navigate(['/home']);
    alert('Registrado');
    console.log(this.Registroform.value);
  }

}
