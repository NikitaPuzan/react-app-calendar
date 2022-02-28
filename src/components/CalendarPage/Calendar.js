import React from 'react';
import style from './Calendar.module.css'

const Calendar = ({firstDay}) => {
  const startDay = firstDay.clone().subtract(1, 'day')
  const weekDay = ['Понедельник,', 'Вторник,', 'Среда,','Четверг,','Пятница,','Суббота,','Воскресенье,']
  const days = [...Array(35)].map(() => startDay.add(1, 'day').clone())

  return (
    <div className={style.calendar}>
      {
        days.map((day, i) => (
          <div key={day.format('YYYYMMDD')} className={style.item}>
            {weekDay[i]} {day.format('D')}
          </div>
        ))
      }
    </div>
  );
};

export default Calendar;
