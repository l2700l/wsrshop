import { productType } from '../types/product';

export const getAllProducts = async () => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/call', {
      method: 'POST',
      body: JSON.stringify({
        name: 'getAllProducts',
        Args: [],
      }),
    })
  ).json();
  return JSON.parse(data) as productType[];
};
