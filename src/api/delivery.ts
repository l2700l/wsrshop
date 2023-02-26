import { deliveryType } from '../types/delivery';

export const delivery = async (id: string) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/transact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'delivery',
        Args: [id],
      }),
    })
  ).json();
  return JSON.parse(data) as deliveryType;
};
