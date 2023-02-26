import React, { useState } from 'react';
import { login } from '../../api/login';
import { getUserType } from '../../types/user';

/**
 * @summary изи
 * @param onAuth
 * @constructor
 */
const Login: React.FC<{
  onAuth: (user: getUserType) => void;
}> = ({ onAuth }) => {
  const [username, setUsername] = useState('');
  const authHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = await login(username);
    onAuth(user);
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <button onClick={authHandler}> Войти </button>
    </div>
  );
};

export default Login;
