export const returnProductToShop = async (
  login: string,
  shop: string,
  name: string,
) => {
  const data = await fetch(process.env.REACT_APP_API_URL + '/transact', {
    method: 'POST',
    body: JSON.stringify({
      name: 'returnProductToShop',
      Args: [login, shop, name],
    }),
  });
  return data.ok;
};
