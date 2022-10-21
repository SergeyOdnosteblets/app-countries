import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NeighboursType } from '../../Types/NeighboursType';

import style from './Neighbours.module.scss';

export const Neighbours: React.FC<NeighboursType> = ({ neighbours, countries, themeColor }) => {
  const navigate = useNavigate();

  const handleClick = (id: any) => {
    navigate(`/${id.target.innerText}`);
  };

  const findCountry = (neighbours: string) => {
    let data = [...countries];
    let index = data.findIndex((item: any) => item.fifa === neighbours);

    if (index !== -1) {
      return data[index].name.common;
    }
  };

  return (
    findCountry(neighbours) && (
      <button
        className={themeColor ? `${style.button} ${style.darkButton}` : `${style.button}`}
        onClick={(id) => handleClick(id)}>
        {findCountry(neighbours)}
      </button>
    )
  );
};
