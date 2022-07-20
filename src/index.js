import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './login';

import Counter from './features/counter/counter';
import reportWebVitals from './reportWebVitals';
import CreateEmployee from './CreateEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Edit from './edit'
import Employee from './employee';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Login/>}/>
      <Route path='/employeelist' element={<EmployeeList/>}/> 
       <Route path='/create' element={<CreateEmployee/>}/> 
     <Route path='/update/:id' element={<Edit/>}/>
     <Route path='/employee/:id' element={<Employee/>}/>
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
