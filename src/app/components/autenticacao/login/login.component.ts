import { Router } from '@angular/router';
import { UsuarioLogadoModel } from './../../../models/usuarioLogado.models';
import { Observable } from 'rxjs/Rx';
import { UsuarioAutenticacaoModel } from './../../../models/usuarioAutenticacao.models';
import { Component, Input } from '@angular/core';
import { Validators, FormControl, NgModel } from '@angular/forms';
import { UsuarioService } from './../../../services/usuario-service/usuario-service.service';

import 'rxjs/add/operator/toPromise';

const EMAIL_REGEX: RegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: UsuarioAutenticacaoModel;

  emailFormControl = new FormControl('', [Validators.required,
                                          Validators.pattern(EMAIL_REGEX)]);
  senhaFormControl = new FormControl('', [Validators.required]);

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.usuario = new UsuarioAutenticacaoModel('', '');
  }

  login() {
    this.usuarioService.login(this.usuario)
    .subscribe(
      (res: UsuarioLogadoModel) => {
        this.router.navigate(['home']);
      },
      (res: String) => {
        console.log(res);
      }
    );
  }
}
