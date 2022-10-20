import React from 'react';
import { Filters } from '../../Components/Filters/Filters';
import { List } from '../../Components/List/List';
import { HomePageType } from '../../Types/HomePageType';

import style from './HomePage.module.scss';

export const HomePage: React.FC<HomePageType> = ({
  themeColor,
  countries,
  getInputChange,
  searchValue,
  setSelect,
}) => {
  return (
    <div className={themeColor ? `${style.homePage} ${style.darkTheme}` : `${style.homePage} `}>
      <div className={style.content}>
        <Filters
          getInputChange={getInputChange}
          searchValue={searchValue}
          setSelect={setSelect}
          themeColor={themeColor}
        />
        <List countries={countries} themeColor={themeColor} />
      </div>
    </div>
  );
};
