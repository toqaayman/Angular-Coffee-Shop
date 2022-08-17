export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  sugar: number;
  color: string;
  category: string;
  boughtItemsCount: number;
  size: number;
}

export const products: Product[] = [
  {
    id: 6,
    name: 'Mocha',
    price: 40,
    description: 'A large phone with one of the best screens',
    image: "../../assets/images/mocha.png",
    boughtItemsCount: 1,
    category: "coffee", color: "brown",size: 1, sugar:0,

  },
  {
    id: 7,
    name: 'Latte',
    price: 50,
    description: 'A great phone with one of the best cameras',
    image: "../../assets/images/latte.png",
    boughtItemsCount: 1,
    category: "coffee", color: "brown",size: 1, sugar:0,
  },
  {
    id: 8,
    name: 'Espresso',
    price: 20,
    description: '',
    image: "../../assets/images/espresso.png",
    boughtItemsCount: 1,
    category: "coffee", color: "brown",size: 1, sugar:0,
  },
  {
    id: 9,
    name: 'Cappuccino',
    price: 40,
    description: '',
    image: "../../assets/images/cappuccino.png",
    boughtItemsCount: 1,
    category: "coffee", color: "brown",size: 1, sugar:0,
  },
  {
    id: 10,
    name: 'macchiato',
    price: 50,
    description: '',
    image: "../../assets/images/macchiato.png",
    boughtItemsCount: 1,
    category: "coffee", color: "brown",size: 1, sugar:0,
  },
  {
    id: 11,
    name: 'Cappuccino',
    price: 60,
    description: '',
    image: "../../assets/images/macchiato.png",
    boughtItemsCount: 1,
    category: "coffee", color: "brown",size: 1, sugar:0,
  },
  {
    id: 12,
    name: 'Cappuccino',
    price: 50,
    description: '',
    image: "../../assets/images/espresso.png",
    boughtItemsCount: 1,
    category: "coffee", color: "brown",size: 1, sugar:0,
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
