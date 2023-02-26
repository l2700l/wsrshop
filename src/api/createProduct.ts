export const createProduct = async (
  name: string,
  provider: string,
  alive: string,
  temp1: string,
  temp2: string,
  price: string,
  date: string,
) => {
  const data = await fetch(process.env.REACT_APP_API_URL + '/transact', {
    method: 'POST',
    body: JSON.stringify({
      name: 'createProduct',
      Args: [name, provider, date, alive, temp1, temp2, price],
    }),
  });
  return data.ok;
};
