import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login.css';
function Login() {
 const navigate = useNavigate()
  return (
    <div className='login'>
     <div className='imgdiv'>
      <img alt='no image' src='sideImg.png'/>
     </div>
     <div className='logindiv'>
      <div><img alt='not available' src='http://localhost:3000/kv_logo.png'/></div>
      
      <div>
          <input type="text" class="inputText" placeholder='username'/>
          
      </div>
      <div>
        <input type="text" class="inputText" placeholder='password'/>
        
      </div>
      <button class="inputbutton" onClick={(e)=>{navigate('/employeelist')}}>Login </button>
     </div>
           
      
      
    </div>
  );
}

export default Login;
