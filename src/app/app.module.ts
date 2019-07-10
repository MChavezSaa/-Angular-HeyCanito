import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CHomeComponent } from './cliente/c-home/c-home.component';
import { CFooterComponent } from './cliente/c-footer/c-footer.component';
import { CNavbarComponent } from './cliente/c-navbar/c-navbar.component';
import { CCatalogoComponent } from './cliente/c-catalogo/c-catalogo.component';
import { CCatalogoDetalleComponent } from './cliente/c-catalogo-detalle/c-catalogo-detalle.component';
import { CBolsaComponent } from './cliente/c-bolsa/c-bolsa.component';
import { CDetalleProductoComponent } from './cliente/c-detalle-producto/c-detalle-producto.component';
import { COpinionComponent } from './cliente/c-opinion/c-opinion.component';
import { AFooterComponent } from './administrador/a-footer/a-footer.component';
import { AListarProductosComponent } from './administrador/a-listar-productos/a-listar-productos.component';
import { ANavbarComponent } from './administrador/a-navbar/a-navbar.component';
import { AAprobarPedidosComponent } from './administrador/a-aprobar-pedidos/a-aprobar-pedidos.component';
import { ALoginComponent } from './administrador/a-login/a-login.component';
import { ARegistrarProductosComponent } from './administrador/a-registrar-productos/a-registrar-productos.component';
import { CLoginComponent } from './cliente/c-login/c-login.component';
import { CRegistrarClienteComponent } from './cliente/c-registrar-cliente/c-registrar-cliente.component';
import { ClienteComponent} from './cliente/cliente.component';
import { AdministradorComponent} from './administrador/administrador.component';
import { AHomeComponent } from './administrador/a-home/a-home.component';


const routes:Routes=[
   //-------------------- RUTAS CLIENTE---------------------------
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:ClienteComponent,
    children:[
      {
        path:'',
        component:CHomeComponent
      },
      {
        path:'catalogo',
        component:CCatalogoComponent
      },
      {
        path:'catalogo/:id',
        component:CCatalogoDetalleComponent
      },
      {
        path:'bolsa',
        component:CBolsaComponent
      },
      {
        path:'catalogo/detalleProducto/:id',
        component:CDetalleProductoComponent
      },
      {
        path:'opinion',
        component:COpinionComponent
      },
      {
        path:'login',
        component:CLoginComponent
      }
    ]
  },
  //-------------------- RUTAS ADMINISTRADOR---------------------------
  {path: 'admin', component:ALoginComponent},
  {path: 'administrador', component: AdministradorComponent,
    children:[
      {
        path: '',
        component: AHomeComponent
      },
      {
        path: 'homeCliente',
        component: CHomeComponent
      },
      {
        path:'aprobarPedidos',
        component:AAprobarPedidosComponent
      },
      {
        path:'listarProductos',
        component:AListarProductosComponent
      },
      {
        path:'registrarProductos',
        component:ARegistrarProductosComponent
      },
      {
        path: 'catalogo',
        component: CCatalogoComponent
      },
      {
        path: 'catalogoDetalle',
        component: CCatalogoDetalleComponent
      },
      {
        path: 'bolsa',
        component: CBolsaComponent
      },
      {
        path: 'detalleProducto',
        component: CDetalleProductoComponent
      },
      {
        path: 'opinion',
        component: COpinionComponent
      }
    ]
  }
];



@NgModule({
  declarations: [
    AppComponent,
    CHomeComponent,
    CFooterComponent,
    CNavbarComponent,
    CCatalogoComponent,
    CCatalogoDetalleComponent,
    CBolsaComponent,
    CDetalleProductoComponent,
    COpinionComponent,
    AFooterComponent,
    AListarProductosComponent,
    ANavbarComponent,
    AAprobarPedidosComponent,
    ALoginComponent,
    ARegistrarProductosComponent,
    CLoginComponent,
    CRegistrarClienteComponent,
    ClienteComponent,
    AdministradorComponent,
    AHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }