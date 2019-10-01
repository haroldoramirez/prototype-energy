import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})

export class CadastroComponent implements OnInit {

  constructor() {
  // tslint:disable-next-line: no-console
    console.log('Componente Cadastro Energy criando...');
  }

  ngOnInit() {
      // tslint:disable-next-line: no-console
      console.log('Componente Cadastro Energy já criado');
  }

  teste = 'teste';

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  trocarNome() {
    this.teste = 'Teste trocado';
  }

}
