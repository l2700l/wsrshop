import { refundProductType } from '../types/refundProduct';

export const getProductListTxByShop = async (shop: string) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/call', {
      method: 'POST',
      body: JSON.stringify({
        name: 'getProductListTxByShop',
        Args: [shop],
      }),
    })
  ).json();
  return JSON.parse(data) as refundProductType[];
};
