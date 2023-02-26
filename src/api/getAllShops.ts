import { shopType } from '../types/shopType';

export const getAllShops = async () => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/call', {
      method: 'POST',
      body: JSON.stringify({
        name: 'getAllShops',
        Args: [],
      }),
    })
  ).json();
  return JSON.parse(data) as shopType[];
};
