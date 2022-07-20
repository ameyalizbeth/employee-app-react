import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/CreateEmployee.css';
function Login() {
 const navigate = useNavigate()
  return (
    <div className='login'>
     <div className='imgdiv'>
      <img alt='no image' src='sideImg.png'/>
     </div>
     <div className='logindiv'>
      <img alt='not available' src='kv_logo.png'/>
      <InputField label="username" onChange={()=>{}} type="text" style={"username"}/>
      <InputField label="password" onChange={()=>{}} type="password" style={"password"}/>
      <Button label="Login" handleClick={()=>navigate('/employeelist') } style={"loginbutton"}/>

     </div>
           
      
      
    </div>
  );
}

export default Login;
