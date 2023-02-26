import React, { useState } from 'react';
import { productType } from '../../types/product';
import { buyProductFromShop } from '../../api/buyProductFromShop';
import { getUserType } from '../../types/user';
import { getUser } from '../../api/getUser';

const CustomerProduct: React.FC<{
  item: productType;
  user: getUserType;
  setUser: (user: getUserType) => void;
  shop: string;
}> = ({ item, user, setUser, shop }) => {
  const [count, setCount] = useState('1');
  const buyHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await buyProductFromShop(user.login, shop, item.name, count);
      const userUpdate = await getUser(user.login);
      setUser(userUpdate);
    } catch (e) {}
  };
  return (
    <>
      <label>
        Количество:
        <input value={count} onChange={(e) => setCount(e.target.value)} />
      </label>
      <p>Итого: {item.price * +count}</p>
      <button onClick={buyHandler}>Купить</button>
    </>
  );
};

export default CustomerProduct;
