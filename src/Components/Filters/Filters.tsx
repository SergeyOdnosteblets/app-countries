import React from 'react';
import { FilterType } from '../../Types/FilterType';
import { Search } from '../Search/Search';
import { Select } from '../Select/Select';

import style from './Filters.module.scss';

export const Filters: React.FC<FilterType> = ({
  getInputChange,
  searchValue,
  setSelect,
  themeColor,
}) => {
  return (
    <div className={style.filters}>
      <Search
        getInputChange={getInputChange}
        searchValue={searchValue}
        setSelect={setSelect}
        themeColor={themeColor}
      />
      <Select setSelect={setSelect} themeColor={themeColor} />
    </div>
  );
};
