import React from 'react';
import {Link} from "react-router-dom";
import style from './Navbar.module.css'
import {useSelector} from "react-redux";

const Navbar = () => {
  const isAuth = useSelector(state => state.auth.isAuth)
  const username = useSelector(state => state.auth.username)

  return (
    <div className={style.navbar}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/information" >Information</Link>
      </div>
      <div>
        <Link to="/calendar">Calendar</Link>
      </div>
      <div>
        <Link to="/profile" >Profile</Link>
      </div>
      <div>
      {isAuth
        ? <div>{username} </div>
        : <Link to="/login">Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;
