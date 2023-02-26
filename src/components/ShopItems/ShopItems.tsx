import React, { useEffect, useState } from 'react';
import CustomSelect from '../Select/CustomSelect';
import { getShopType } from '../../types/shopType';
import { getShop } from '../../api/getShop';
import ProductItem from '../ProductItem/ProductItem';
import { getUserType } from '../../types/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

/**
 * @summary изи
 * @param user
 * @constructor
 */
const ShopItems: React.FC<{
  setUser?: (user: getUserType) => void;
}> = ({ setUser }) => {
  const [id, setId] = useState<string>();
  const [shop, setShop] = useState<getShopType>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const getData = async () => {
      if (id && id !== 'select') {
        const data = await getShop(id);
        setShop(data);
      }
    };
    if (user && user.role === 'shop') {
      setId(user.login);
    }
    getData();
  }, [id]);

  return (
    <div>
      <CustomSelect setId={setId} user={user} />
      {shop && shop.shop.products.length > 0
        ? shop.shop.products.map((product) => (
            <div key={product.name}>
              <ProductItem item={product} setUser={setUser} shop={id} />
            </div>
          ))
        : id &&
          id !== 'select' && (
            <div>Увы, в данном магазине отсутствуют товары</div>
          )}
    </div>
  );
};

export default ShopItems;
