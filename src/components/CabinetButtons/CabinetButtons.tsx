import React from 'react';
import { getUserType } from '../../types/user';
import {
  CUSTOMER_PRODUCTS,
  PROVIDER_CREATE,
  SHOP_PRODUCTS,
  SHOP_REFOUNDS,
} from '../../routes';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

/**
 * @summary изи
 * @param user
 * @constructor
 */
const CabinetButtons: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const buttons = () => {
    switch (user.role) {
      case 'shop':
        return (
          <>
            <a href={`#${SHOP_PRODUCTS}`}>Заказ и подтверждение товаров</a>
            <a href={`#${SHOP_REFOUNDS}`}>Возврат товар</a>
          </>
        );
      case 'customer': {
        return (
          <>
            <a href={`#${CUSTOMER_PRODUCTS}`}>Корзина</a>
          </>
        );
      }
      case 'provider': {
        return (
          <>
            <a href={`#${PROVIDER_CREATE}`}>Создать товар</a>
          </>
        );
      }
    }
  };

  return <div>{buttons()}</div>;
};

export default CabinetButtons;
