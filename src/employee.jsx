
import { useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md';
import { useGetEmployeeByIdQuery } from "./api-client";
import './styles/form.css'
import './styles/CreateEmployee.css';
import { useParams } from "react-router-dom";
import { useNavigate ,Link} from 'react-router-dom';

const Employee = ()=>{
    const {id} = useParams();
    console.log(id);
    const { data, error, isLoading} = useGetEmployeeByIdQuery(id) ;
    console.log(data);
    const navigate = useNavigate()

const edititem = (id)=>{
    navigate(`/update/${id}`)

  }

return(
    < >
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
    <div >
        <main>
            <section>
        
            <h1>
                Employee Details
            </h1>
            <div className='createbutton' onClick={(e)=>edititem(id)}>
                    <span className='pluspan' >
                      <MdOutlineEdit/>
                    </span>
                    <div><p>Edit</p></div>
               </div>
        
        
        </section>
       {isLoading?<div>no data</div>:<div className="maindiv">
        <div className="firstdiv">
            <div>
                <p>
                    Employee Name
                </p>
            </div>

            <div>
                {data.name}
            </div>
        </div>
        <div className="firstdiv">
        <div>
                <p>
                    Employee ID
                </p>
            </div>

            <div>
                {data.employeeid}
            </div>
        </div>
        <div className="firstdiv">
        <div>
                <p>
                    Joining Date
                </p>
            </div>

            <div>
                {data.joiningDate}
            </div>
        </div>
        
        <div className="firstdiv">
        <div>
                <p>
                    Role
                </p>
            </div>

            <div>
                {data.role}
            </div>
        </div>
        <div className="firstdiv">
        <div>
                <p>
                    Status
                </p>
            </div>

            <div>
                <span className={data.status}>
                {data.status}</span>
            </div>
        </div>
        <div className="firstdiv">
        <div>
                <p>
                    Experience
                </p>
            </div>

            <div>
                {data.experience}
            </div>

        </div>
        <hr style={{width:"100%"}}/>
        <div className="firstdiv">
        <div>
                <p>
                    Address
                </p>
            </div>

            <div>
                {data.address}
            </div>
        </div>
        </div>}
        </main>

    </div>
    </>
 
)}

export default Employee;