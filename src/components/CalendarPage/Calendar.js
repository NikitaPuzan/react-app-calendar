import React from 'react';
import style from './Calendar.module.css'
import moment from "moment";

const Calendar = ({firstDay}) => {
  const startDay = firstDay.clone().subtract(1, 'day')
  const weekDay = ['Понедельник, ', 'Вторник, ', 'Среда, ', 'Четверг, ', 'Пятница, ', 'Суббота, ', 'Воскресенье, ']
  const days = [...Array(42)].map(() => startDay.add(1, 'day').clone())

  const isCurrentDay = (day) => moment().isSame(day, 'day')


  return (
    <div className={style.calendar}>
      {
        days.map((day, i) => (
          <div key={day.format('YYYYMMDD')}>
            {isCurrentDay(day)
              ? <div className={style.currentDay}>
                    {weekDay[i]} {day.format('D')}
                </div>
              : <div className={style.item}>
                {weekDay[i]} {day.format('D')}
              </div>
            }
          </div>
        ))
      }
    </div>
  );
};

export default Calendar;
