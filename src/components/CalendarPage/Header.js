import React from 'react';
import style from './Calendar.module.css'
import search from '../../assets/images/search.png'

const Header = ({openAddForm, openEditForm}) => {
  return (
    <div className={style.header}>
      <div>
        <button onClick={openAddForm}>Добавить</button>
        <button onClick={openEditForm}>Обновить</button>
      </div>
      <div className={style.search}>
        <img src={search} width="20"  alt=""/>
        <input type="text" placeholder='Событие, дата или участник'/>
      </div>
    </div>
  );
};

export default Header;
