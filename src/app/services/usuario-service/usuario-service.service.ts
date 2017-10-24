import { environment } from './../../../environments/environment';
import { UsuarioAutenticacaoModel } from './../../models/usuarioAutenticacao.models';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
  import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UsuarioLogadoModel } from '../../models/usuarioLogado.models';

@Injectable()
export class UsuarioService {

  private usuarioLogado: UsuarioLogadoModel = null;

  constructor(
    private http: Http
  ) {
    this.carregaUsuario();
  }

  public getUsuarioLogadoAtual() {
    return this.usuarioLogado;
  }

  public login(usuario: UsuarioAutenticacaoModel) {
    const urlLogin = '/rest/login';

    const  headers = new Headers();
    headers.append('Authorization', environment.autorizationHeader);
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions( {method: RequestMethod.Get, headers: headers });

    return this.http
        .post(urlLogin, usuario, options)
        .map((res: Response) => {
          const response = res.json();
          if (response && response.token) {
            this.usuarioLogado = response as UsuarioLogadoModel;
            return this.usuarioLogado;
          } else {
            return {'error': 'Usuário e/ou senha inválido.'};
          }
        });
  }

  private getToken(): any {
    const usuario = Cookie.get('intralacos-api-token');
    if (usuario) {
      return usuario;
    } else {
      return null;
    }
  }

  private carregaUsuario() {
    this.usuarioLogado = this.getToken() as UsuarioLogadoModel;
  }

}
