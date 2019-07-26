import { Component, OnInit } from '@angular/core';
import { IOpinion} from 'src/app/opnion';
import { ProductoService } from '../../servicio/producto.service';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-opinion',
  templateUrl: './c-opinion.component.html',
  styleUrls: ['./c-opinion.component.css']
})
export class COpinionComponent implements OnInit {

  formOpinion: FormGroup;

  constructor(private router: Router,
    public productService: ProductoService,
    private formBuilder: FormBuilder) {

    this.formOpinion = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      comentario: ['', [Validators.required]]
    });

     }

  ngOnInit() {
  }

  guardarOpinion(opinion: IOpinion) {
    this.productService.saveOpinion(opinion).subscribe(() => {
      return this.productService.getOpinion().subscribe((res: any[]) => {
        this.productService.opinion = res;
      },
        err => console.log(err));
    })
  }

  saveData() {
    this.guardarOpinion(this.formOpinion.value);
    this.router.navigate(['/home']);
    console.log(this.formOpinion.value);
  }


}
