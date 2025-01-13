import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import NavBar from '../Nav/Nav';
import Register from "../Nav/Register";
import { Routes,Route } from 'react-router-dom'


export default  function InputsExample() {
  const [form, setForm] = useState([]);
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;

  useEffect(() => {
    if (form.length) {
      toast(`Welcome ${form[0].name} ${form[0].lastName} `);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value
    const password = event.target[1].value
    const name = event.target[2].value;
    const lastName = event.target[3].value;

    for (let i = 0; i < 4; i++) {
      if (!event.target[i].value.length) {
        return toast.error("Please fill out the form properly");
      } else {
        if(!regex.test(email)){
          return toast.error("check your E-mail!");
        }
        if (name.length <= 1) {
          return toast.error("Name must be at least 2 characters long");
        }
        if (lastName.length <= 1) {
          return toast.error("Last Name must be at least 2 characters long");
        }
      }
      
    }

    event.target.reset();
    const dataUser = {
      email: email,
      name: name,
      lastName: lastName,
    };

    setForm([dataUser]);
  };

  return (
    <div>
      <NavBar form={form} onClick={()=>setForm([])} key={1}/>
        {!form.length ?(<Routes key={2}><Route path="register" element={<Register handleSubmit={handleSubmit}/>}/></Routes>) : (
          <>
            {form.map(() => {
            return (<Routes key={2}><Route path="profile"></Route></Routes>)})}
          </>
        )}
    </div>
  );
};
