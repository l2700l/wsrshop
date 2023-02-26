import { getUserType } from './user';
import { productType } from './product';

export type shopType = {
  number: string;
  city: string;
  products: productType[];
};

export type getShopType = {
  user: getUserType;
  shop: shopType;
};
