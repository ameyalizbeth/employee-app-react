
import { useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import Form from "./form";
import './styles/form.css'
import './styles/CreateEmployee.css';
const CreateEmployee = (props)=>{
const {handleClick} =  props;
 return(
    < >
    <div className="App">
        <main>
            <section>
        <div>
            <h1>
                Create Employee
            </h1>
        
        </div>
        </section>
        <div className="emp-form">
        <Form handleClick={handleClick}/>
        </div>
        
        </main>

    </div>
    </>
 )
}
export default CreateEmployee;