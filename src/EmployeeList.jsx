import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import { useEffect, useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import './styles/CreateEmployee.css';
import CreateEmployee from './CreateEmployee';
import {useGetEmployeeQuery, useDeleteEmployeeMutation} from './api-client/index'
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import Popup from './pop';
import InputSelect from './components/InputSelect';
function EmployeeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [id,setId] = useState('');
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const navigate = useNavigate()
    const [isShown, setIsShown] = useState(true);
  //   
  const { data, error, isLoading:Loading } = useGetEmployeeQuery() ;

  const [deleteEmployee, {isLoading} ] = useDeleteEmployeeMutation();
  console.log(data)
    const deleteitem = (id)=>{

      deleteEmployee(id);

    }
    const getbyid = (id)=>{
      navigate(`/employee/${id}`)
    }
    const edititem = (id)=>{
      navigate(`/update/${id}`)

    }
    const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown(current => !current);
  
      // 👇️ or simply set it to true
      // setIsShown(true);
    };
  
  return (
    <div >
     
         <aside>
            <div className="mydiv">
                <a href="http://localhost:3000/">
                    <img alt="not available" src="http://localhost:3000/kv_logo.png"/>

                </a>


            </div>
            <nav>
                <a href="http://localhost:3000/employeelist">
                    <div id="logodiv">
                        <img alt="no logo" src="http://localhost:3000/List.png" id="logo"/>
                        Employee List

                    </div>

                </a>
            

            </nav>
        
            
       
        </aside>
        {isShown &&(
            <main>
            <section>
               <h1>Employee List</h1> 
              
               <div className='createbutton' onClick={handleClick}>
                    <span className='pluspan'>
                      +
                    </span>
                    <div><p>Create Employee</p></div>
               </div>
               </section>
        <table>
        <thead>
          <tr className='tablehead'>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Joining Date</th>
            <th>Status</th>
            <th>Role</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            Loading? (<div>no data</div>):(
            data.map(element => {
              return (
                <tr key={element.id} onClick={(e)=>getbyid(element.id)}>
                  <td>{element.name}</td>
                  <td>{element.employeeid}</td>
                  <td>{element.joiningDate}</td>
                  <td><span className={element.status}>{element.status}</span></td>
                  <td>{element.role}</td>
                  <td>{element.experience}</td>
                  <td>
                    <div>
                        
                            <span  onClick={(e)=>{ e.stopPropagation();setId(element.id);togglePopup()}}><MdOutlineDelete/></span>
                        
                       
                           <span onClick={(e)=>{e.stopPropagation();edititem(element.id)}}><MdOutlineEdit/></span>
                      
                    </div>
                  </td>
                  
                  
                </tr>
              )
            }))
          }
        </tbody>
      </table>
               
         
        </main>
        ) }
        
      
        {!isShown && <CreateEmployee  handleClick={handleClick} />}
        {isOpen && <Popup 
      content={<>
        <p>ARE YOU SURE?</p>
        <p>Do you really want to delete the employee?</p>
        <button className='delete'  onClick={(e)=>{deleteitem(id);togglePopup()}}>confirm</button>
        <button  className='cancelbutton' onClick={(e)=>togglePopup()}>cancel</button>
      </>}
      handleClose={togglePopup}
    />}
    </div>
  );
}

export default EmployeeList;
