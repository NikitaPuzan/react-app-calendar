import React from 'react';
import {useSelector} from "react-redux";
import { Navigate} from 'react-router-dom';

const Profile = () => {
  const isAuth = useSelector(state => state.auth.isAuth)
  console.log(isAuth)
  if(!isAuth) {
    return <Navigate to={'/login'} />
  }
  return (
    <div>
      Profile
    </div>
  );
};

export default Profile;
