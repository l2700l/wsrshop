import React, { useEffect, useState } from 'react';
import { productType } from '../../types/product';
import { getAllProducts } from '../../api/getAllProducts';
import ProductItem from '../../components/ProductItem/ProductItem';
import { getUserType } from '../../types/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

/**
 * @summary изи
 * @constructor
 */
const ShopProducts: React.FC = () => {
  const [products, setProducts] = useState<productType[]>();
  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div>
      <a href={'#'}>Вернуться</a>
      {products ? (
        products.map((product) => (
          <div key={product.name}>
            <ProductItem item={product} isOrder={true} />
          </div>
        ))
      ) : (
        <div>Продукты не найдены</div>
      )}
    </div>
  );
};

export default ShopProducts;
