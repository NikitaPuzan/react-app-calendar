import React, {useEffect, useState} from 'react';
import style from './Login.module.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameDirty, setUsernameDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [usernameError, setUsernameError] = useState('Username is required')
  const [passwordError, setPasswordError] = useState('Password is required')
  const [valid, setValid] = useState(false)

  useEffect(() => {
    if (passwordError || usernameError) {
      setValid(false)
    } else {
      setValid(true)
    }
  }, [usernameError, passwordError]);


  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'username':
        setUsernameDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  const usernameHandler = (e) => {
    setUsername(e.target.value)
    const re = /^[a-z0-9_-]{3,16}$/igm
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUsernameError('Invalid username')
    } else {
      setUsernameError('')
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 5) {
      setPasswordError('Minimum 5 characters length ')
    } else if (e.target.value.length > 10) {
      setPasswordError('Maximum 10 characters length ')
    } else {
      setPasswordError('')
    }
  }

  return (
    <div className={style.form}>
      <form>
        <h1>Authorization</h1>
        <input value={username}
               onBlur={e => blurHandler(e)}
               onChange={e => usernameHandler(e)}
               name="username"
               type="text"
               placeholder="Enter your username.."/>
        {(usernameDirty && usernameError) && <div style={{color: 'red'}}>{usernameError}</div>}
        <input value={password}
               onBlur={e => blurHandler(e)}
               onChange={e => passwordHandler(e)}
               name="password"
               type="password"
               placeholder="Enter your password.."/>
        {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
        <button disabled={!valid} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
