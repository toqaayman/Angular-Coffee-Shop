import {Product} from "./product";
import { User } from '../data/user';

export class TestData {

  static products: Product[] = [
    {
      id: 6,
      name: 'Mocha',
      price: 50,
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
  static user: User[] = [
    {
      username: "toqa",
      email: "string",
      password: "string"
    }
  ]
}
