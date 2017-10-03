import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoComponent {


  constructor() {
    document.body.style.background = 'url(\'../../../assets/img/login-bg.jpg\') no-repeat center center fixed';
    document.body.style.height = '100%';
    document.body.style.backgroundSize = 'cover';
  }

  OnDestroy() {
    document.body.style.background = 'none';
    document.body.style.height = 'none';
    document.body.style.backgroundSize = 'none';
  }

}
