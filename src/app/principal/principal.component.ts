import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  titu = 'Paises turisticos del mundo';
  st: any = [
    {
      nombre: 'España',
      capital: 'Madrid',
      descripcion:
        'España, país de la península ibérica de Europa, incluye 17 regiones autónomas con diversas características geográficas y culturales.',
    },
    {
      nombre: 'Francia',
      capital: 'Paris',
      descripcion:
        'Francia, en Europa Occidental, abarca ciudades medievales, villas alpinas y playas mediterráneas. París, su capital, es famosa por sus firmas de alta costura, los museos de arte clásico, como el Louvre, y monumentos como la Torre Eiffel.',
    },
    {
      nombre: 'Irlanda',
      capital: 'Dublin',
      descripcion:
        'La República de Irlanda ocupa la mayor parte de la isla de Irlanda, frente a las costas de Inglaterra y Gales. Su capital, Dublín, es el lugar de nacimiento de escritores famosos como Oscar Wilde y también es hogar de la cerveza Guinness. El Libro de Kells (siglo IX) y otros manuscritos ilustrados se exhiben en la biblioteca del Trinity College de Dublín.',
    },
    {
      nombre: 'Nueva Zelanda',
      capital: 'Wellington',
      descripcion:
        'Nueva Zelanda es un país en el suroeste del océano Pacífico, que comprende dos islas principales, ambas marcadas por los volcanes y la glaciación. En la capital, Wellington, en la Isla Norte, se encuentra el extenso museo nacional Te Papa Tongarewa.',
    },
    {
      nombre: 'Grecia',
      capital: 'Atenas',
      descripcion:
        'Grecia es un país del sureste de Europa con miles de islas en los mares Egeo y Jónico. Fue influyente en la antigüedad y, a menudo, se le llama la "cuna de la civilización occidental".',
    },
    {
      nombre: 'Alemania',
      capital: 'Berlín',
      descripcion:
        'Alemania es un país de Europa occidental con un paisaje de bosques, ríos, cadenas montañosas y playas en el mar del Norte. Tiene más de 2 milenios de historia. Berlín, su capital, cuenta con sitios de arte y vida nocturna, la Puerta de Brandeburgo y muchos sitios relacionados con la Segunda Guerra Mundial.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
