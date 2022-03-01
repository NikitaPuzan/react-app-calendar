import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Header from "./Header";
import SelectedDate from "./SelectedDate";
import Calendar from "./Calendar";
import {useDispatch, useSelector} from "react-redux";
import style from './Calendar.module.css'
import {addEvent, editEvent} from "../../redux/actions";
import {Navigate} from "react-router-dom";

const CalendarPage = () => {
  const eventsData = useSelector(state => state.event.events)
  const isAuth = useSelector(state => state.auth.isAuth)
  const username = useSelector(state => state.auth.username)

  const dispatch = useDispatch()
  const [events, setEvents] = useState([])

  const [event, setEvent] = useState(null)
  const defaultEvent = {
    title: '',
    author: 'Admin',
    date: moment().format('X')
  }

  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)

  moment.updateLocale('en', {week: {dow: 1}})
  const [today, setToday] = useState(moment());
  const firstDay = today.clone().startOf('month').startOf('week')

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, 'month'))
  const todayHandler = () => setToday(moment())
  const nextHandler = () => setToday(next => next.clone().add(1, 'month'))

  const startDay = firstDay.clone().format('X')
  const endDay = firstDay.clone().add(42, 'days').format('X')

  useEffect(() => {
    setEvents(eventsData.filter(e => e.date >= startDay && e.date <= endDay))
  }, [today])

  const openAddForm = () => {
    setEvent(defaultEvent)
    setShowForm(true)
  }
  const openEditForm = () => {
    event ? setEditForm(true) : alert('Кликните дважды по событию для выбора его для обновления')
  }
  const addHandleSubmit = e => {
    e.preventDefault()
    const date = Math.round(new Date(e.target[1].value).getTime() / 1000.0)
    dispatch(addEvent({id: new Date(), title: e.target[0].value, date: date, author: username}))
    setEvents([...events, {id: new Date(), title: e.target[0].value, date: date, author: username}])
    setShowForm(false)
  }
  const editHandleSubmit = (event, e) => {
    e.preventDefault()
    dispatch(editEvent(event.id, event.title))
    setEvents([...events, events.map(elem => elem.id === event.id ? elem.title = event.title : elem)])
    setEditForm(false)
  }
  const onEditEvent = (eventForUpdate) => {
    setEvent(eventForUpdate)
  }
  const changeEventHandler = (text, field) => {
    setEvent(prevState => ({
      ...prevState,
      [field]: text
    }))
  }

  if (!isAuth) {
    return <Navigate to={'/login'}/>
  }
  return (
    <>
      {
        showForm ? (
          <form className={style.form} onSubmit={e => addHandleSubmit(e)}>
            <div className={style.formEvent}>
              <input value={event.title} onChange={e => changeEventHandler(e.target.value, 'title')} type="text"
                     placeholder="Enter your event"/>
              <input type="date"/>
              <button type="submit">Save</button>
            </div>
          </form>
        ) : null
      }
      {
        editForm ? (
          <form className={style.form} onSubmit={e => editHandleSubmit(event, e)}>
            <div className={style.formEvent}>
              <input value={event.title} onChange={e => changeEventHandler(e.target.value, 'title')} type="text"
                     placeholder="Enter your event"/>
              <button type="submit">Save</button>
            </div>
          </form>
        ) : null
      }
      <Header openEditForm={openEditForm}
              openAddForm={openAddForm}
      />
      <SelectedDate today={today}
                    nextHandler={nextHandler}
                    todayHandler={todayHandler}
                    prevHandler={prevHandler}
      />
      <Calendar onEditEvent={onEditEvent} firstDay={firstDay} events={events}/>
    </>
  );
};

export default CalendarPage;
