export const buyProductFromShop = async (
  login: string,
  shop: string,
  name: string,
  count: string,
) => {
  const data = await fetch(process.env.REACT_APP_API_URL + '/transact', {
    method: 'POST',
    body: JSON.stringify({
      name: 'buyProductFromShop',
      Args: [login, shop, name, count],
    }),
  });
  return data.ok;
};
