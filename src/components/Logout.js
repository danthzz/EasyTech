import React from 'react'
import "./Logou.css";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../freatures/userSlice';
import logo from '../img/logo.png'



const Logout = () => {
  const user = useSelector(selectUser)

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }
  return (
    <div className='main'>
      <div className='logout'>
        <div id="janelaEdicaoFundo"></div>
        <h1 className='wc' >Bem Vindo (a) <span className='user__name'>{user.name}</span></h1>
        <button className='logout__button container1' onClick={(e) => handleLogout(e)}>Logout</button>
      </div>

      <div className='logo_content'>
        <img className="logo1" src={logo} alt="" />
      </div>

      <div className='container content'>
        <div className='sector'>
          <i class="icon fa-solid fa-user-group"></i>
          <br/>
          Recursos Humanos
        </div>
        <div className='sector'>
          <i class="icon fa-solid fa-circle-dollar-to-slot"></i>
          <br/>
          Financeiro
        </div>
        <div className='sector'>
          <i class="icon fa-solid fa-scale-balanced"></i>
          <br/>
          Jurídico
        </div>
        <div className='sector'>
          <i class="icon fa-solid fa-helmet-safety"></i>
          <br/>
          Saúde & Segurança
        </div>
        <div className='sector'>
          <i class="icon fa-solid fa-screwdriver-wrench"></i>
          <br/>
          Mecânica
        </div>
        <div className='sector'>
          <i class="icon fa-solid fa-bolt-lightning"></i>
          <br/>
          Elétrica
        </div>
        <div className='sector'>
          <i class="icon fa-solid fa-gear"></i>
          <br/>
          Manutenção
        </div>
        <div className='sector'>
          <i class="icon fa-solid fa-seedling"></i>
          <br/>
          Meio Ambiente
        </div>
      </div>
    </div>
    
  );
};

export default Logout;