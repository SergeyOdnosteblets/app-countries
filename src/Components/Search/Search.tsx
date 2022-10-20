import React from 'react';
import { FilterType } from '../../Types/FilterType';

import { IoSearch } from 'react-icons/io5';

import style from './Search.module.scss';

export const Search: React.FC<FilterType> = ({ getInputChange, searchValue, themeColor }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e: any) => getInputChange(e)}
        value={searchValue}
        className={themeColor ? `${style.input} ${style.darkTheme}` : `${style.input}`}
      />
      <div className={style.icon}>
        <IoSearch />
      </div>
    </>
  );
};
