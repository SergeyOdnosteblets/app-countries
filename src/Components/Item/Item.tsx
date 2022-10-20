import React from 'react';
import { ItemType } from '../../Types/ItemType';

import style from './Item.module.scss';

export const Item: React.FC<ItemType> = ({
  capital,
  name,
  population,
  flag,
  region,
  themeColor,
}) => {
  return (
    <div className={themeColor ? `${style.item} ${style.darkTheme}` : `${style.item}`}>
      <img src={flag} alt="" className={style.image} />
      <div className={style.info}>
        <p className={style.country}>{name}</p>
        <p>
          <span className={style.info__title}>Population:</span> {population}
        </p>
        <p>
          <span className={style.info__title}>Region:</span> {region}
        </p>
        <p>
          <span className={style.info__title}>Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};
