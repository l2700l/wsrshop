import React from 'react';
import { refundProductType } from '../../types/refundProduct';
import { acceptReturnProduct } from '../../api/acceptReturnProduct';

/**
 * изи
 * @param item
 * @constructor
 */
const RefundItem: React.FC<{ item: refundProductType }> = ({ item }) => {
  const refund = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await acceptReturnProduct(item.id, item.shopnumber);
    } catch (e) {}
  };
  return (
    <div>
      <p>Название: {item.productname}</p>
      <p>Пользователь: {item.userlogin}</p>
      <button onClick={refund}>Подтвердить возврат</button>
    </div>
  );
};

export default RefundItem;
