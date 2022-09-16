import { Component, OnInit } from '@angular/core';
import { product } from './product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  galletitas: product[] = [
    {
    "name": "Surtido Bagley",
    "type": "Dulces",
    "price": 500,
    "stock": 5,
    "image" : "assets/images/surtidoBagley.webp",
    "clearance": false,
  },
  {
    "name": "Variedad",
    "type": "Dulces",
    "price": 450,
    "stock": 10,
    "image" : "assets/images/surtidoVariedad.jpg",
    "clearance": true,
  },
  {
    "name": "Diversion",
    "type": "Dulces",
    "price": 470,
    "stock": 7,
    "image" : "assets/images/surtidoDiversion.webp",
    "clearance": false,
  },
  {
    "name": "Variedad Doradas",
    "type": "Dulces",
    "price": 520,
    "stock": 15,
    "image" : "assets/images/surtidoVariedadDorada.jpg",
    "clearance": false,
  },
  {
    "name": "Boca De Dama",
    "type": "Dulces",
    "price": 200,
    "stock": 20,
    "image" : "assets/images/bocaDeDama.jpg",
    "clearance": false,
  },
  {
    "name": "Variedad Chocolate",
    "type": "Dulces",
    "price": 400,
    "stock": 0,
    "image" : "assets/images/surtidoVariedadChocolate.jpg",
    "clearance": false,
  },
  {
    "name": "Lincoln",
    "type": "Dulces",
    "price": 250,
    "stock": 70,
    "image" : "assets/images/galletitasLincoln.webp",
    "clearance": true,
  },
  {
    "name": "Cerealitas x3",
    "type": "Saladas",
    "price": 650,
    "stock": 30,
    "image" : "assets/images/galletitasCerealitas.jpg",
    "clearance": false,
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
