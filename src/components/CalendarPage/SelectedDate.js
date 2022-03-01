import React from 'react';
import style from './Calendar.module.css'

const SelectedDate = ({today, prevHandler, todayHandler, nextHandler}) => {
  return (
    <div className={style.selectedDate}>
      <button onClick={prevHandler}> &lt; </button>
      <span>{today.format('MMMM YYYY')}</span>
      <button onClick={nextHandler}> &gt; </button>
      <button onClick={todayHandler}>Сегодня</button>
    </div>
  );
};

export default SelectedDate;
