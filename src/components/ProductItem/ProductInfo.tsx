import React from 'react';
import { productType } from '../../types/product';

const ProductInfo: React.FC<{
  item: productType;
}> = ({ item }) => {
  return (
    <div>
      <p>Название: {item.name}</p>
      <p>Цена: {item.price}</p>
      <p>Поставщик: {item.producer}</p>
      <p>Количество: {item.amount}</p>
    </div>
  );
};

export default ProductInfo;
