import { Component, OnInit } from '@angular/core';

interface Libros{
  titulo: string;
  imagen: string;
  autor: string;
  creacion: string;
}

@Component({
  selector: 'app-i-biblioteca',
  templateUrl: './i-biblioteca.page.html',
  styleUrls: ['./i-biblioteca.page.scss'],
})
export class IBibliotecaPage implements OnInit {

  libros: Libros[]=[
    {
      titulo:'El señor de los anillos: la comunidad del anillo',
      imagen:'https://contralainercia.files.wordpress.com/2019/01/imagen-la-comunidad-del-anillo.jpg',
      autor:'J.R.R. Tolkien',
      creacion:'1954'
    },
    {
      titulo:'Harry Potter y la Orden del Fénix',
      imagen:'https://catalogue.immateriel.fr/resources/2f/16/1c0e31e4be76f8dfbbba5cb6905f78b92bb0226e1dc51affd18947e3e185.jpg',
      autor:'J.K. Rowling',
      creacion:'2003'
    },
    {
      titulo:'Kybalión',
      imagen:'https://images.cdn3.buscalibre.com/fit-in/360x360/88/72/8872ff25575febccafbab243431e7d6a.jpg',
      autor:'Three Initiates',
      creacion:'1908'
    },
    {
      titulo:'La Odisea',
      imagen:'https://image.isu.pub/200225175226-59e9e033221eb509822f0b17a206ecbd/jpg/page_1.jpg',
      autor:'Homero',
      creacion:'Siglo VIII a.C. (Aproximadamente)'
    },
    {
      titulo:'Moby-Dick',
      imagen:'https://www.gonvill.com.mx/imagenes/9786074/978607415687.JPG',
      autor:'Herman Melville',
      creacion:'1851'
    },
    {
      titulo:'Don Quijote de la Mancha',
      imagen:'https://lalibretadenani.files.wordpress.com/2020/07/don-quijote.jpg?w=333',
      autor:'Miguel de Cervantes',
      creacion:'1605'
    },
    {
      titulo:'Guerra y paz',
      imagen:'https://www.libreriacamara.com/imagenes/9788490/978849065754.JPG',
      autor:'León Tolstói',
      creacion:'1867'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
