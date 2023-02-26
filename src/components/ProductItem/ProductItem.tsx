import React, { useState } from 'react';
import { productType } from '../../types/product';
import { getUserType } from '../../types/user';
import { buyProductFromShop } from '../../api/buyProductFromShop';
import { shopAcceptCost } from '../../api/shopAcceptCost';
import { deliveryType } from '../../types/delivery';
import { delivery } from '../../api/delivery';
import { shopBuyProduct } from '../../api/shopBuyProduct';
import ProductInfo from './ProductInfo';
import CustomerProduct from './CustomerProduct';
import ShopProducts from '../../pages/shopProducts/ShopProducts';
import ShopProduct from './ShopProduct';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

/**
 * @summary не изи
 * @param item
 * @param user
 * @param shop
 * @param isOrder
 * @constructor
 */
const ProductItem: React.FC<{
  item: productType;
  shop?: string;
  isOrder?: boolean;
  setUser?: (user: getUserType) => void;
}> = ({ item, shop, setUser, isOrder = false }) => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <ProductInfo item={item} />
      {user && user.role === 'customer' && setUser && shop && (
        <CustomerProduct
          setUser={setUser}
          item={item}
          user={user}
          shop={shop}
        />
      )}
      {isOrder && user && <ShopProduct item={item} user={user} />}
    </div>
  );
};

export default ProductItem;
