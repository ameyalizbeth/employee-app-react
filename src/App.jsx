import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button';
import { useEffect, useState } from 'react';
function App() {
  const onClick = ()=>{
    const name = prompt("enter your name");
    onChange(name)
    
  }
  
  

  const [username,setUsername] =  useState(" ");
  const [display,setDisplay] =  useState("");

  useEffect(()=>{
      setDisplay('sample name')
  },[])
  useEffect(()=>{
    if(username){
      setDisplay(username)
    }
  },[username])
  const onChange = (value)=>{
    setUsername(value);
  }
  return (
    <div className="App">
     
      <InputField label="username" onChange={onChange} type="text"/>
      {/* <InputField label="password" type="password"/>
      <Button label="Login" handleClick={()=>{}}/> */}
     
      {display &&<p>hello {username} {display}</p>}
      
    </div>
  );
}

export default App;
