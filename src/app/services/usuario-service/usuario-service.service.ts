import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class UsuarioServiceService {

  private usuarioLogado = null;

  constructor() {
    this.carregaUsuario();
  }

  public getUsuarioLogadoAtual() {
    return this.usuarioLogado;
  }

  private getToken(): string {
    return Cookie.get('intralacos-api-token');
  }

  private carregaUsuario() {
    this.usuarioLogado = this.getToken();
  }

}
