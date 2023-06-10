
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Add = () => {
    const [Firstname,setFirstname] = useState("");
    const [Lastname,setLastname] = useState("");
    const [Email,setEmail] = useState("");
    const [Role,setRole] = useState("");
    const history = useNavigate()
  
    const OnSubmit = (e) => {
      e.preventDefault();
      console.log('click');
      axios
      .post('https://64849202ee799e321626d351.mockapi.io/ems',
      {
          Firstname: Firstname,
          Lastname: Lastname,
          Email: Email,
          Role: Role
      })
      history("/Members");
  }
 

 
  
  return (
    <div className="container">
      <div className="mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New User</h2>
       
        <form onSubmit={OnSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Firstname</label>
              <input
                className="form-control"
                id="first"
                type="text"
                placeholder=""
                onChange={(e)=>setFirstname(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label>Lastname</label>
              <input
                id="last"
                className="form-control"
                type="text"
                placeholder=""
                onChange={(e)=>setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="example@gmail.com"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-md-7">
              <label for="inputRole">Role</label>
              <div className="col-auto my-7">
                <select className="custom-select mr-sm-7"  onChange={(e)=>setRole(e.target.value)} id="role">
                  <option selected>Choose...</option>
                  <option value="Member">Member</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Designer">Designer</option>
                  <option value="Director">Director</option>
                  <option value="Assistant">Assistant</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
