import React, { useEffect, useState } from 'react';
import './App.css';
import { getUserType } from './types/user';
import Login from './pages/login/Login';
import Cabinet from './pages/cabinet/Cabinet';
import ShopProducts from './pages/shopProducts/ShopProducts';
import ShopRefunds from './pages/shopRefunds/ShopRefunds';
import {
  CUSTOMER_PRODUCTS,
  PROVIDER_CREATE,
  SHOP_PRODUCTS,
  SHOP_REFOUNDS,
} from './routes';
import CustomerProducts from './pages/customerProducts/CustomerProducts';
import ProviderCreate from './pages/providerCreate/ProviderCreate';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './redux/slices/user';
import { RootState } from './redux/store';

function App() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [page, setPage] = useState<JSX.Element | null>(null);
  const changePage = () => {
    const route = window.location.href.split('#');
    if (route.length > 1) {
      switch (route[1]) {
        case SHOP_PRODUCTS: {
          // @ts-ignore
          setPage(<ShopProducts />);
          break;
        }
        case SHOP_REFOUNDS: {
          // @ts-ignore
          setPage(<ShopRefunds />);
          break;
        }
        case CUSTOMER_PRODUCTS: {
          // @ts-ignore
          setPage(
            <CustomerProducts
              setUser={(user: getUserType) => dispatch(setUser(user))}
            />,
          );
          break;
        }
        case PROVIDER_CREATE: {
          setPage(<ProviderCreate />);
          break;
        }
        default: {
          setPage(null);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('hashchange', changePage);
    changePage();
    return () => window.removeEventListener('hashchange', changePage);
  }, []);

  return (
    <div className='App'>
      {user?.balance ? (
        <>
          <button onClick={() => dispatch(setUser(undefined))}>Выход</button>
          {page ? (
            page
          ) : (
            <Cabinet setUser={(user: getUserType) => dispatch(setUser(user))} />
          )}
        </>
      ) : (
        <Login onAuth={(user: getUserType) => dispatch(setUser(user))} />
      )}
    </div>
  );
}

export default App;
