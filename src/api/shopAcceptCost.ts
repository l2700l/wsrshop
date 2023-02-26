import { acceptCostType } from '../types/acceptCost';

export const shopAcceptCost = async (
  shop: string,
  name: string,
  count: string,
) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/transact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'shopAcceptCost',
        args: [shop, name, count],
      }),
    })
  ).json();
  return JSON.parse(data) as acceptCostType;
};
