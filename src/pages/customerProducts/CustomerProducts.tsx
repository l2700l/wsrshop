import React from 'react';
import { getUserType } from '../../types/user';
import ProductItem from '../../components/ProductItem/ProductItem';
import { productType } from '../../types/product';
import { returnProductToShop } from '../../api/returnProductToShop';
import { getUser } from '../../api/getUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

/**
 * @summary изи
 * @param user
 * @constructor
 */
const CustomerProducts: React.FC<{
  setUser: (user: getUserType) => void;
}> = ({ setUser }) => {
  const user = useSelector((state: RootState) => state.user);
  const refoundHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
    product: productType,
  ) => {
    e.preventDefault();
    try {
      await returnProductToShop(user.login, product.shop, product.name);
      const userUpdate = await getUser(user.login);
      setUser(userUpdate);
    } catch (e) {}
  };

  const updateUser = (user: getUserType) => {
    setUser(user);
  };

  return (
    <div>
      <a href={'#'}>Вернуться</a>
      {user?.products?.length > 0 ? (
        user.products.map((product) => (
          <div key={product.name}>
            <ProductItem item={product} setUser={updateUser} />
            <button onClick={(e) => refoundHandler(e, product)}>Вернуть</button>
          </div>
        ))
      ) : (
        <div>У вас не товаров!</div>
      )}
    </div>
  );
};

export default CustomerProducts;
