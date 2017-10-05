import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: String;
  password: String;

  emailFormControl = new FormControl('', [Validators.required,
                                          Validators.pattern(EMAIL_REGEX)]);
  senhaFormControl = new FormControl('', [Validators.required]);

  constructor() { }
}
