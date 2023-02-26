import React, { useEffect, useState } from 'react';
import { getUserType } from '../../types/user';
import { refundProductType } from '../../types/refundProduct';
import { getProductListTxByShop } from '../../api/getProductListTxByShop';
import RefundItem from '../../components/RefundItem/RefundItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

/**
 * @summary изи
 * @param user
 * @constructor
 */
const ShopRefunds: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  const [items, setItems] = useState<refundProductType[]>();
  useEffect(() => {
    const getData = async () => {
      const data = await getProductListTxByShop(user.login);
      setItems(data);
    };
    getData();
  }, []);
  return (
    <div>
      <a href={'#'}>Вернуться</a>
      {items && items.map((item) => <RefundItem item={item} />)}
    </div>
  );
};

export default ShopRefunds;
