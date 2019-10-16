import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private data = [
    {
      category: 'Pizza',
      expanded: true,
      products: [
        { id: 0, name: 'Salami', price: '8', imageUrl: '/assets/images/salami.jpg' },
        { id: 1, name: 'Classic', price: '5', imageUrl: '/assets/images/classic.jpg' },
        { id: 2, name: 'Tuna', price: '9', imageUrl: '/assets/images/tuna.jpg' },
        { id: 3, name: 'Hawai', price: '7', imageUrl: '/assets/images/hawai.jpg' }
      ]
    },
    {
      category: 'Pasta',
      products: [
        { id: 4, name: 'Macaroni ', price: '8', imageUrl: '/assets/images/mac.jpg' },
        { id: 5, name: 'Bolognese', price: '6', imageUrl: '/assets/images/bolagnese.jpg' }
      ]
    },
    {
      category: 'Salad',
      products: [
        { id: 6, name: 'Ham', price: '8', imageUrl: '/assets/images/ham.jpg'  },
        { id: 7, name: 'Basic', price: '5', imageUrl: '/assets/images/basic.jpg'  },
        { id: 8, name: 'Ceaser', price: '9', imageUrl: '/assets/images/ceaser.jpg'  }
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}
