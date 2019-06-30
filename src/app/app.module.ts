import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CHomeComponent } from './cliente/c-home/c-home.component';
import { AHomeComponent } from './administrador/a-home/a-home.component';
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
import { RegistrarProductosComponent } from './administrador/registrar-productos/registrar-productos.component';
import { ARegistrarProductosComponent } from './administrador/a-registrar-productos/a-registrar-productos.component';
import { CLoginComponent } from './cliente/c-login/c-login.component';
import { CRegistrarClienteComponent } from './cliente/c-registrar-cliente/c-registrar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CHomeComponent,
    AHomeComponent,
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
    RegistrarProductosComponent,
    ARegistrarProductosComponent,
    CLoginComponent,
    CRegistrarClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
