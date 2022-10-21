import React from 'react';
import { HeaderTypes } from '../../Types/HeaderTypes';

import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import style from './Header.module.scss';
import '../../App.scss';

export const Header: React.FC<HeaderTypes> = ({ themeColor, onThemeChange }) => {
  return (
    <div className={themeColor ? `${style.header} ${style.dark}` : `${style.header}`}>
      <div className={style.container}>
        <p className={style.title}>Where in the world?</p>
        <div onClick={onThemeChange} className={style.icon}>
          {themeColor ? <IoMoon /> : <IoMoonOutline />}
          <span className={style.title__icon}>Dark Mode</span>
        </div>
      </div>
    </div>
  );
};
