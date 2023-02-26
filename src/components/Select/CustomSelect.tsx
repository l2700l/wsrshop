import React, {
  ChangeEventHandler,
  ReactEventHandler,
  useEffect,
  useState,
} from 'react';
import { shopType } from '../../types/shopType';
import { getAllShops } from '../../api/getAllShops';
import { getUserType } from '../../types/user';

/**
 * @summary изи
 * @param setId
 * @constructor
 */
const CustomSelect: React.FC<{
  user?: getUserType;
  setId: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ user, setId }) => {
  const [shops, setShops] = useState<shopType[]>();

  const selectHandler = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setId(e.target.value);
  };

  useEffect(() => {
    const get = async () => {
      const data = await getAllShops();
      setShops(data);
    };
    get();
  }, []);
  return (
    <div>
      Выберите магазин:
      <select onChange={selectHandler}>
        <option value={'select'}>Выбрать</option>
        {shops &&
          shops.map((shop) => (
            <option
              selected={
                user && user.role === 'shop' && user.login === shop.number
              }
              key={shop.number}
              value={shop.number}
            >
              {shop.number}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CustomSelect;
