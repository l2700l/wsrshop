import React, { useState } from 'react';
import { createProduct } from '../../api/createProduct';

/**
 * @summary изи
 * @constructor
 */
const ProviderCreate = () => {
  const [name, setName] = useState('');
  const [provider, setProvider] = useState('');
  const [alive, setAlive] = useState('0');
  const [temp1, setTemp1] = useState('0');
  const [temp2, setTemp2] = useState('0');
  const [price, setPrice] = useState('0');
  const [createDate, setCreateDate] = useState<string>();
  const [status, setStatus] = useState('');

  const createHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(createDate);
    try {
      if (createDate) {
        const date = `${createDate.slice(8, 10)}.${createDate.slice(
          5,
          7,
        )}.${createDate.slice(0, 4)}`;
        const ok = await createProduct(
          name,
          provider,
          alive.toString(),
          temp1.toString(),
          temp2.toString(),
          price.replace(',', '.'),
          date,
        );
        setStatus(ok ? 'Товар успешно создан' : 'Товар не получилось создать');
      }
    } catch (e) {
      console.log(e);
      setStatus('Товар не получилось создать');
    }
  };

  return (
    <div>
      <a href={'#'}>Вернуться</a>
      {status !== '' && <p>{status}</p>}
      <label>
        Название:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Производитель:
        <input value={provider} onChange={(e) => setProvider(e.target.value)} />
      </label>
      <label>
        Дата производства:
        <input
          type={'date'}
          value={createDate}
          onChange={(e) => setCreateDate(e.target.value)}
        />
      </label>
      <label>
        Срок:
        <input value={alive} onChange={(e) => setAlive(e.target.value)} />
      </label>
      <label>
        Температура 1:
        <input value={temp1} onChange={(e) => setTemp1(e.target.value)} />
      </label>
      <label>
        Температура 2:
        <input value={temp2} onChange={(e) => setTemp2(e.target.value)} />
      </label>
      <label>
        Цена:
        <input
          type={'text'}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button onClick={createHandler}>Создать</button>
    </div>
  );
};

export default ProviderCreate;
