import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../freatures/userSlice';
import logo from '../img/logo.png'
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        password: password,
        loggendIn: true
      })
    );
  };

  return (
    <div className='login'>
      <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
        <h2>Área de Procedimentos Operacionais</h2>
        <h3>Faça seu login aqui</h3>
        <img className="logo" src={logo} alt="" />
        <input
          type="name"
          placeholder='Usuário'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='submit__btn'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login