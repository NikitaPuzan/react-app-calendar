import React, {useState} from 'react';
import moment from 'moment';
import Header from "./Header";
import SelectedDate from "./SelectedDate";
import Calendar from "./Calendar";

const CalendarPage = () => {
  moment.updateLocale('en', {week: {dow: 1}})
  const [today, setToday] = useState(moment());
  const firstDay = today.clone().startOf('month').startOf('week')

  const prevHandler = () => setToday(prev => prev.clone().subtract(1 , 'month'))
  const todayHandler = () => setToday(moment())
  const nextHandler = () => setToday(next => next.clone().add(1, 'month'))


  return (
    <div>
      <Header />
      <SelectedDate today={today}
                    nextHandler={nextHandler}
                    todayHandler={todayHandler}
                    prevHandler={prevHandler}
      />
      <Calendar firstDay={firstDay} />
    </div>
  );
};

export default CalendarPage;
