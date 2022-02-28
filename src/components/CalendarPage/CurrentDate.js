import React from 'react';
import style from './Calendar.module.css'

const CurrentDate = ({currentDate}) => {
  return (
    <div className={style.selectedDate}>
      <button>{'<'}</button>
      <span>{currentDate}</span>
      <button>{'>'}</button>
      <button>Сегодня</button>
    </div>
  );
};

export default CurrentDate;
