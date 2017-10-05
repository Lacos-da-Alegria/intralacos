import { environment } from './../../../environments/environment';
import { UsuarioLoginModel } from './../../models/usuarioLogin.models';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  private usuarioLogado = null;

  constructor(
    private http: Http
  ) {
    this.carregaUsuario();
  }

  public getUsuarioLogadoAtual() {
    return this.usuarioLogado;
  }

  public login(usuario: UsuarioLoginModel) {
    const urlLogin = environment.serviceUrl + 'login';

    const headers = new HttpHeaders().set('Authorization', environment.autorizationHeader)
                                    .set('Content-Type', 'application/json');

    this.http
        .post(urlLogin, usuario, {params: headers})
        .map(res => res.json());
  }

  private getToken(): string {
    return Cookie.get('intralacos-api-token');
  }

  private carregaUsuario() {
    this.usuarioLogado = this.getToken();
  }

}
