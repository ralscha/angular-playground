export interface MOCK_PRODUCT {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Angular Hoodie',
    price: 49.99,
    description: 'Cozy zip-up hoodie with the Angular logo.',
    imageUrl: 'https://picsum.photos/id/1050/300/200'
  },
  {
    id: 2,
    name: 'Signal Sticker Pack',
    price: 9.99,
    description: 'Set of 10 vinyl stickers featuring Angular Signals.',
    imageUrl: 'https://picsum.photos/id/1012/300/200'
  },
  {
    id: 3,
    name: 'Zoneless Mug',
    price: 14.99,
    description: 'Ceramic mug with “Zoneless & Chill” printed on it.',
    imageUrl: 'https://picsum.photos/id/1025/300/200'
  },
  {
    id: 4,
    name: 'CDK Stepper Socks',
    price: 12.99,
    description: 'Fun and colorful socks with CDK Stepper icons.',
    imageUrl: 'https://picsum.photos/id/1062/300/200'
  },
  {
    id: 5,
    name: 'Angular Signals T-Shirt',
    price: 29.99,
    description: 'Soft cotton tee with a printed Angular Signals graphic.',
    imageUrl: 'https://picsum.photos/id/1011/300/200'
  }
];