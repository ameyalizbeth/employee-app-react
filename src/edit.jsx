
import { useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import FormData from "./formdata";
import './styles/form.css'
import './styles/CreateEmployee.css';
import { useParams } from "react-router-dom";
import { useUpdateEmployeeMutation ,useGetEmployeeByIdQuery} from "./api-client";
const Edit = ()=>{
const {id} = useParams();
const { data, error, isLoading} = useGetEmployeeByIdQuery(id) ;
const name = data?data.name:"";
const joiningDate = data?data.joiningDate:"";
const experience = data?data.experience:"";
const status = data?data.status:"";
const role = data?data.role:"";
const employeeid =data? data.employeeid:"";
const address = data?data.address:"";
const email = data?data.email:"";


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
    <div className="App">
        <main>
            <section>
        <div>
            <h1>
                Update Employee
            </h1>
        
        </div>
        </section>
        {isLoading?(<div>IS LOADING</div>):(
        <div className="emp-form">
        <FormData  id={id} name={name} address={address} joiningDate={joiningDate} experience={experience} role={role} status={status} employeeid={employeeid} email={email}/>
        </div>
        )}
        </main>

    </div>
    </>
 )
}
export default Edit;