import { HomeComponent } from './components/home/home.component';
import { AutenticacaoComponent } from './components/autenticacao/autenticacao.component';
import { RegistrarComponent } from './components/autenticacao/registrar/registrar.component';
import { LoginComponent } from './components/autenticacao/login/login.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'autenticacao',
    component: AutenticacaoComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registrar',
        component: RegistrarComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: AppComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
