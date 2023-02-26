import { getShopType } from '../types/shopType';

export const getShop = async (id: string) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/call', {
      method: 'POST',
      body: JSON.stringify({
        name: 'getShop',
        Args: [id],
      }),
    })
  ).json();
  return JSON.parse(data) as getShopType;
};
