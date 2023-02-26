import { productType } from './product';

export type acceptCostType = {
  currentcost: number;

  id: string;

  product: productType;
  shopnumber: string;

  startcost: string;

  temp: string[];

  tempfailamount: 0;
};
