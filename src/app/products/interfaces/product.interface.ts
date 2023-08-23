export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  type: Type;
  tags: Tag[];
  title: string;
  gender: Gender;
}

export enum Gender {
  Men = 'men',
}

export enum Size {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS',
  Xxl = 'XXL',
}

export enum Tag {
  Hoodie = 'hoodie',
  Jacket = 'jacket',
  Shirt = 'shirt',
  Sweatshirt = 'sweatshirt',
}

export enum Type {
  Hoodies = 'hoodies',
  Shirts = 'shirts',
}
