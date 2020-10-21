import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  /*livros = [
    {
      id_livro: "1",
      titulo_livro: "amor",
      autor_livro: "roberto",
      numero_paginas: "13",
    },
    {
      id_livro: "2",
      titulo_livro: "odio",
      autor_livro: "aamanda",
      numero_paginas: "24",
    },
    ];*/

    @Input() livros = [];
  constructor() { }

  ngOnInit(): void {
  }

}
