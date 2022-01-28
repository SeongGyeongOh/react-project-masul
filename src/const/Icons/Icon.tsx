import React, { useState } from 'react';
import { iconName, IconSet } from '../Icons/icons.svg';

export interface IconProps {
  icon: iconName;
  size: number;
  color?: string;
}

const Icon = ({ icon, size, color }: IconProps) => {
  return (
    <svg height={size} viewBox={IconSet[icon].viewBox} xmlns="http://www.w3.org/2000/svg" fill={color}>
      <path d={IconSet[icon].path} />
    </svg>
  );
};
export default Icon;
