import { environment } from './../../../environments/environment';
import { UsuarioLoginModel } from './../../models/usuarioLogin.models';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

    const  headers = new Headers();
    headers.append('Access-Control-Expose-Headers', 'Authorization');
    headers.append('Authorization', environment.autorizationHeader);
    headers.append('Content-Type', 'application/json');

    const opts = new RequestOptions();
    opts.headers = headers;

    return this.http
        .post(urlLogin, usuario, opts)
        .map((res: Response) => {
          const response = res.json();
          if (response && response.token) {
            this.usuarioLogado = response;
            return (login) => this.usuarioLogado;
          } else {
            return (error: {'error': 'Usuário e/ou senha inválido.'}) => error;
          }
        });
  }

  private getToken(): string {
    return Cookie.get('intralacos-api-token');
  }

  private carregaUsuario() {
    this.usuarioLogado = this.getToken();
  }

}
