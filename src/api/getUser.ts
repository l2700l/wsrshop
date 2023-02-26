import { getUserType } from '../types/user';
export const getUser = async (name: string) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/call', {
      method: 'POST',
      body: JSON.stringify({
        name: 'getUser',
        Args: [name, name],
      }),
    })
  ).json();
  return JSON.parse(data) as getUserType;
};
