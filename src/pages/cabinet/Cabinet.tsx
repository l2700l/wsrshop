import React, { useEffect, useState } from 'react';
import { getUserType } from '../../types/user';
import ShopItems from '../../components/ShopItems/ShopItems';
import CabinetButtons from '../../components/CabinetButtons/CabinetButtons';
import { getUser } from '../../api/getUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

/**
 * @summary изи
 * @param user
 * @constructor
 */
const Cabinet: React.FC<{
  setUser: (user: getUserType) => void;
}> = ({ setUser }) => {
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const getData = async () => {
      const data = await getUser(user.login);
      setUser(data);
    };
    getData();
  }, []);
  return (
    <div>
      <div>{`Balance: ${user.balance}`}</div>
      <ShopItems setUser={setUser} />
      <CabinetButtons />
    </div>
  );
};

export default Cabinet;
