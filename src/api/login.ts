import { getUserType } from '../types/user';
export const login = async (name: string) => {
  const data = await (
    await fetch(process.env.REACT_APP_API_URL + '/call', {
      method: 'POST',
      body: JSON.stringify({
        name: 'login',
        Args: [name, name],
      }),
    })
  ).json();
  return JSON.parse(data) as getUserType;
};
