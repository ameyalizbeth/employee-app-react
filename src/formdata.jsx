import React, { useState } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";

import "./styles/form.css";
import { useAddNewEmployeeMutation,useUpdateEmployeeMutation } from "./api-client";
import { useNavigate ,Link} from 'react-router-dom';

const FormData = (props) => {
    const navigate = useNavigate();
    
  const {name,address,employeeid,role,status,experience,joiningDate, email,id} = props
  const [empData, setEmpData] = useState({
    id:id,
    name: name,
    employeeid: employeeid,
    joiningDate: joiningDate,
    email: email,
    experience: experience,
    address: address,
    idProof: "",
    role: role,
    status: status,
  });

  const [updateEmployee,{isLoading:Loading}] = useUpdateEmployeeMutation()
  const handleChange = (name, value) => {
    console.log(name, value);
    setEmpData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(empData);
  };
  const handleClick =  (e)=>{
    e.preventDefault();
    console.log("hello")
        navigate(-1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    updateEmployee(empData).unwrap();
    setEmpData({
      name: "",
      employeeid: "",
      joiningDate: "",
      email: "",
      experience: "",
      address: "",
      idProof: "",
      role: "",
      status: "",
    });
    handleClick(e)

  };

  const formFields = [
    {
      key: 1,
      label: "Employee Name",
      type: "text",
      placeholder: "Employee Name",
      name: "name",
    },
    {
      key: 2,
      label: "Employee ID",
      type: "text",
      placeholder: "Employee ID",
      name: "employeeid",
    },
    {
      key: 3,
      label: "Joining Date",
      type: "date",
      placeholder: "Joining Date",
      name: "joiningDate",
    },
    {
      key: 4,
      label: "Employee Email",
      type: "email",
      placeholder: "Employee Email",
      name: "email",
    },
    {
      key: 5,
      label: "Experience",
      type: "text",
      placeholder: "Experience",
      name: "experience",
    },
    {
      key: 6,
      label: "Address",
      type: "text",
      placeholder: "Address",
      name: "address",
    },
    {
      key: 7,
      label: "Upload ID Proof",
      type: "file",
      name: "idProof",
    },
  ];
  return (
    <form >
      <div className="details">
        {formFields.map((item) => {
          return (
            <div className="data" key={item.key}>
              <InputField
                label={item.label}
                type={item.type}
                placeholder={item.placeholder}
                onChange={handleChange}
                name={item.name}
                value={empData[item.name]}
              />
            </div>
          );
        })}
        <div className="data">
          <InputSelect
            label="Role"
            values={[
              { key: 1, value: "Role1", name: "Role1" },
              { key: 2, value: "Role2", name: "Role2" },
              { key: 3, value: "Role3", name: "Role3" },
            ]}
            onChange={handleChange}
            name="role"
            value={empData.role}
          />
        </div>
        <div className="data">
          <InputSelect
            label="Status"
            values={[
              { key: 1, value: "Active", name: "Active" },
              { key: 2, value: "Inactive", name: "Inactive" },
              { key: 3, value: "Probation", name: "Probation" },
            ]}
            onChange={handleChange}
            name="status"
            value={empData.status}
          />
        </div>
      </div>
      <div className="buttons">
        <Button style="createb" label="Edit" handleClick={(e) => handleSubmit(e)} />
        <Button style="cancelb" label="Cancel" handleClick={(e) => handleClick(e)} />
      </div>
    </form>
  );
};

export default FormData;