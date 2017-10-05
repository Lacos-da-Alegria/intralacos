import { UsuarioLoginModel } from './../../../models/usuarioLogin.models';
import { Component } from '@angular/core';
import { Validators, FormControl, NgModel } from '@angular/forms';
import { UsuarioService } from './../../../services/usuario-service/usuario-service.service';

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
    console.log(this.usuario.email);
  }
}
