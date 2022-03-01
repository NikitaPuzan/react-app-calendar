import React from 'react';
import style from './Profile.module.css'
import {useSelector} from "react-redux";
import {Navigate} from 'react-router-dom';

const Profile = () => {
  const username = useSelector(state => state.auth.username)
  const events = useSelector(state => state.event.events)
  const isAuth = useSelector(state => state.auth.isAuth)
  if (!isAuth) {
    return <Navigate to={'/login'}/>
  }
  console.log(events)
  return (
    <div>
      <div>
        <div className={style.profileBackground}>
          <img
            src="https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg"
            alt=""/>
        </div>
        <div className={style.descriptionBlock}>
          <div className={style.item}>
            <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt=""/>
            <div className={style.user}>
              {username}
              <div>События:</div>
            </div>
            {
              events.map(event => <li key={event.id} className={style.item}>{event.title}</li>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
