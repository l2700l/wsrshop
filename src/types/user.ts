import { productType } from './product';

export type getUserType = {
  login: string;
  password: string;
  role: 'customer' | 'shop' | 'provider';
  balance: number;
  fio: string;
  products: productType[];
};
