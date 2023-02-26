export const acceptReturnProduct = async (id: string, shop: string) => {
  const data = await fetch(process.env.REACT_APP_API_URL + '/transact', {
    method: 'POST',
    body: JSON.stringify({
      name: 'acceptReturnProduct',
      Args: [id, shop],
    }),
  });
  return data.ok;
};
