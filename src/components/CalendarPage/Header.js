import React from 'react';
import style from './Calendar.module.css'
import search from '../../assets/images/search.png'

const Header = () => {
  return (
    <div className={style.header}>
      <div>
        <button>Добавить</button>
        <button>Обновить</button>
      </div>
      <div className={style.search}>
        <img src={search} width="20"  alt=""/>
        <input type="text" placeholder='Событие, дата или участник'/>
      </div>
    </div>
  );
};

export default Header;
