import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import user_icon from '../Assets/user.png';
import password_icon from '../Assets/padlock.png';
import login from '../Assets/login.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (username === 'Çavuş' && password === '1234') {
      navigate('/phonebook');
    } else {
      setErrorMessage('Username or Password is wrong.');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <img src={login} alt="" />
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>
          Submit
        </div>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Login;
