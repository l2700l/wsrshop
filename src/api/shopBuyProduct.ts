export const shopBuyProduct = async (id: string, state: 'true' | 'false') => {
  const data = await fetch(process.env.REACT_APP_API_URL + '/transact', {
    method: 'POST',
    body: JSON.stringify({
      name: 'shopBuyProduct',
      Args: [id, state],
    }),
  });
  return data.ok;
};
