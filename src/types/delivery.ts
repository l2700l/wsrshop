import { productType } from './product';

export type deliveryType = {
  id: string;
  shopnumber: string;
  startcost: number;
  currentcost: number;
  temp: number[];
  product: productType;
  tempfailamount: number;
};
