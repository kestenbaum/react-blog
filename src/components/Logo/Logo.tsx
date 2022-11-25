import React, { FC } from 'react';
import style from '../Logo/Logo.module.css';

interface Logo {
  children: string;
}

export const Logo:FC<Logo> = ({children}) => {
  return (
    <div className={style.logo}>{children}</div>
  )
}
