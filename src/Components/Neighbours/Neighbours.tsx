import React from 'react';
import { NeighboursType } from '../../Types/NeighboursType';

export const Neighbours: React.FC<NeighboursType> = ({ neighbours }) => {
  return <div>{neighbours}</div>;
};
