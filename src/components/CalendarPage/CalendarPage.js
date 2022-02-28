import React from 'react';
import moment from 'moment';
import Header from "./Header";
import CurrentDate from "./CurrentDate";
import Calendar from "./Calendar";

const CalendarPage = () => {

  moment.updateLocale('en', {week: {dow: 1}})
  const firstDay = moment().startOf('month').startOf('week')

  const currentDate = moment().format('MMM   YYYY')

  return (
    <div>
      <Header />
      <CurrentDate currentDate={currentDate}/>
      <Calendar firstDay={firstDay} />
    </div>
  );
};

export default CalendarPage;
