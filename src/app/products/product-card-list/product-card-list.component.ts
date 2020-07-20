import { Component, OnInit } from '@angular/core';
import { Card } from '../../shared/models/product-card-model';
@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})

export class ProductCardComponent implements OnInit {
  cards: Card[] = [];

  constructor() { }

  ngOnInit() {
    this.cards = [
      new Card (
        'http://placehold.it/255x182',
        'Product 1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '1$'
      ),
      new Card (
        'http://placehold.it/255x182',
        'Product 2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '1$'
      ),
      new Card (
        'http://placehold.it/255x182',
        'Product 3',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '1$'
      ),
      new Card (
        'http://placehold.it/255x182',
        'Product 4',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '1$'
      ),
    ];
  }

}
