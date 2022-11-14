import React, { FC } from 'react';
import { Logo } from '../Logo/Logo';
import style from '../Header/Header.module.css';

export const Header:FC = () =>  {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <header className={style.headerWrapper}>
          <div className={style.headerLeft}>
            <Logo/>
          </div>
          <div className={style.headerRight}>Navigation</div>
        </header>
      </div>
    </header>
  )
} 
