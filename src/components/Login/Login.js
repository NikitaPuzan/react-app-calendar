import React from 'react';
import style from './Login.module.css'

const Login = ({
                 handleSubmit, username, password, blurHandler,
                 usernameHandler, passwordHandler,
                 usernameError, usernameDirty,
                 passwordDirty, passwordError,
                 valid
               }) => {
  return (
    <div className={style.form}>
      <form onSubmit={e => handleSubmit(e)}>
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
        <button onClick={() => alert('Username: Admin \nPassword: 12345678')}>Help</button>
        <button disabled={!valid} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
