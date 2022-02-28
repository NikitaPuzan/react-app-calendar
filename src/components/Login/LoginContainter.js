import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAuth} from "../../redux/actions";
import {Navigate} from "react-router-dom";
import Login from "./Login";

const LoginContainer = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameDirty, setUsernameDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [usernameError, setUsernameError] = useState('Username is required')
  const [passwordError, setPasswordError] = useState('Password is required')
  const [valid, setValid] = useState(false)
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuth)


  useEffect(() => {
    if (passwordError || usernameError) {
      setValid(false)
    } else {
      setValid(true)
    }
  }, [usernameError, passwordError]);

  const blurHandler = e => {
    switch (e.target.name) {
      case 'username':
        setUsernameDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  const usernameHandler = e => {
    setUsername(e.target.value)
    const re = /^[a-z0-9_-]{3,16}$/igm
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUsernameError('Invalid username')
    } else {
      setUsernameError('')
    }
  }
  const passwordHandler = e => {
    setPassword(e.target.value)
    if (e.target.value.length < 5) {
      setPasswordError('Minimum 5 characters length ')
    } else if (e.target.value.length > 10) {
      setPasswordError('Maximum 10 characters length ')
    } else {
      setPasswordError('')
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    if(e.target[0].value === 'Admin' && e.target[1].value=== '12345678'){
      dispatch(getAuth(username))
    } else {
      setPasswordError('Имя пользователя или пароль введены неверно')
    }
  }

  if(isAuth) return  <Navigate to={'/profile'} />

  return (
    <Login password={password}
           handleSubmit={handleSubmit}
           passwordHandler={passwordHandler} usernameHandler={usernameHandler}
           blurHandler={blurHandler} usernameDirty={usernameDirty}
           passwordDirty={passwordDirty} valid={valid}
    />
  );
};

export default LoginContainer;
