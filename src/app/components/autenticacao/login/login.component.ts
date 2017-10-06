import { Observable } from 'rxjs/Rx';
import { UsuarioLoginModel } from './../../../models/usuarioLogin.models';
import { Component, Input } from '@angular/core';
import { Validators, FormControl, NgModel } from '@angular/forms';
import { UsuarioService } from './../../../services/usuario-service/usuario-service.service';

import 'rxjs/add/operator/toPromise';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: UsuarioLoginModel;

  emailFormControl = new FormControl('', [Validators.required,
                                          Validators.pattern(EMAIL_REGEX)]);
  senhaFormControl = new FormControl('', [Validators.required]);

  constructor(
    private usuarioService: UsuarioService
  ) {
    this.usuario = new UsuarioLoginModel('', '');
  }

  login() {
    this.usuarioService.login(this.usuario)
    .subscribe(
      login => {
        console.log(login);
      },
      error => {
        console.log(error);
      }
    );
  }
}
