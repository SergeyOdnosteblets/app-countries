import React from 'react';
import { ListType } from '../../Types/ListType';
import { Item } from '../Item/Item';

import { useNavigate } from 'react-router-dom';

import style from './List.module.scss';

export const List: React.FC<ListType> = ({ countries, themeColor }) => {
  const navigate = useNavigate();

  const handleClick = (country: string) => {
    navigate(`/${country}`);
  };

  return (
    <div className={style.list}>
      {countries.map((item: any) => (
        <div
          key={item.name.common}
          className={style.list__items}
          onClick={() => handleClick(item.name.common)}>
          <Item
            capital={item.capital}
            name={item.name.common}
            population={item.population}
            flag={item.flags.png}
            region={item.region}
            themeColor={themeColor}
          />
        </div>
      ))}
    </div>
  );
};
