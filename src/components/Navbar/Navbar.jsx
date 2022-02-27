import React from 'react';
import {Link} from "react-router-dom";
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/information" >Information</Link>
      </div>
      <div>
        <Link to="/profile" >Profile</Link>
      </div>
      <div>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
