import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/autenticacao/login/login.component';
import { RegistrarComponent } from './components/autenticacao/registrar/registrar.component';
import { AutenticacaoComponent } from './components/autenticacao/autenticacao.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioServiceService } from './services/usuario-service/usuario-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    AutenticacaoComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    UsuarioServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
