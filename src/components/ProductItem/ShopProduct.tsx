import React, { useState } from 'react';
import { deliveryType } from '../../types/delivery';
import { shopAcceptCost } from '../../api/shopAcceptCost';
import { delivery } from '../../api/delivery';
import { shopBuyProduct } from '../../api/shopBuyProduct';
import { productType } from '../../types/product';
import { getUserType } from '../../types/user';

const ShopProduct: React.FC<{
  item: productType;
  user: getUserType;
}> = ({ item, user }) => {
  const [count, setCount] = useState('1');
  const [deliveryInfo, setDeliveryInfo] = useState<deliveryType>();

  const orderHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const data = await shopAcceptCost(user.login, item.name, count);
      await delivery(data.id);
      await delivery(data.id);
      await delivery(data.id);
      await delivery(data.id);
      await delivery(data.id);
      const deliveryData = await delivery(data.id);
      setDeliveryInfo(deliveryData);
    } catch (e) {}
  };

  const shopBuyProductHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
    state: boolean,
  ) => {
    e.preventDefault();
    if (deliveryInfo)
      await shopBuyProduct(deliveryInfo?.id, state ? 'true' : 'false');
    setDeliveryInfo(undefined);
  };
  return (
    <>
      {deliveryInfo ? (
        <>
          <p>Некоректных доставок: {deliveryInfo.tempfailamount}</p>
          <p>Температурные режимы: {deliveryInfo.temp.toString()} </p>
          <p>Текущая цена: {deliveryInfo.currentcost}</p>
          <button onClick={(e) => shopBuyProductHandler(e, true)}>
            Принять
          </button>
          <button onClick={(e) => shopBuyProductHandler(e, false)}>
            Отказать
          </button>
        </>
      ) : (
        <>
          <label>
            Количество:
            <input value={count} onChange={(e) => setCount(e.target.value)} />
          </label>
          <p>Итого: {item.price * +count}</p>
          <button onClick={orderHandler}>Заказать</button>
        </>
      )}
    </>
  );
};

export default ShopProduct;
