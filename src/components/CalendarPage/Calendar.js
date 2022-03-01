import React from 'react';
import style from './Calendar.module.css'
import moment from "moment";

const Calendar = ({onEditEvent, firstDay, events}) => {
  const startDay = firstDay.clone().subtract(1, 'day')
  const weekDay = ['Понедельник, ', 'Вторник, ', 'Среда, ', 'Четверг, ', 'Пятница, ', 'Суббота, ', 'Воскресенье, ']
  const days = [...Array(42)].map(() => startDay.add(1, 'day').clone())

  const isCurrentDay = (day) => moment().isSame(day, 'day')
  const isEventDay = day => (
    events
      .filter(event => event.date >= day.format('X') && event.date <= day.clone().endOf('day').format('X'))
      .map(event => (
        <div key={event.id}>
          <button onDoubleClick={() => onEditEvent(event)} className={style.title}>{event.title}</button>
          <div>{event.author}</div>
        </div>
      ))
  )

  return (
    <div className={style.calendar}>
      {
        days.map((day, i) => (
          <div key={day.format('YYYYMMDD')}>
            <div className={isEventDay(day).length !== 0 ? style.eventDay : isCurrentDay(day) ? style.currentDay : style.item}>
              {weekDay[i]}{day.format('D')}
              <div>
                {isEventDay(day)}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Calendar;

//events
//                     .filter(event => event.date >= day.format('X') && event.date <= day.clone().endOf('day').format('X'))
//                     .map(event => (
//                       <div>{event.title}</div>
//                     ))