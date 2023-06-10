import { React, useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios';

const Edit = () => {
  const [id,setId] = useState(0);
  const [Firstname,setFirstname] = useState("");
  const [Lastname,setLastname] = useState("");
  const [Email,setEmail] = useState("");
  const [Role,setRole] = useState("");
  const back = useNavigate();

  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setFirstname(localStorage.getItem("Firstname"));
    setLastname(localStorage.getItem("Lastname"));
    setEmail(localStorage.getItem("Email"));
    setRole(localStorage.getItem("Role"));
},[])

function OnSubmit(e) {
  e.preventDefault();
  axios.put(`https://64849202ee799e321626d351.mockapi.io/ems/${id}`,{
      Firstname: Firstname,
      Lastname: Lastname,
      Email: Email,
      Role: Role
  })
  
  .then(()=>{ back('/Members') })
 
}

  return (
    <div className="container">
    <div className="mx-auto shadow p-5">
      <h2 className="text-center mb-4">Edit User</h2>
     
      <form onSubmit={OnSubmit}>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Firstname</label>
            <input
              className="form-control"
              id="first"
              type="text"
              value={Firstname}
              onChange={(e)=>setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Lastname</label>
            <input
              id="last"
              className="form-control"
              type="text"
              value={Lastname}
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
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-7">
            <label for="inputRole">Role</label>
            <div className="col-auto my-7">
              <select className="custom-select mr-sm-7"  onChange={(e)=>setRole(e.target.value)} id="role" value={Role}>
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
          Update
        </button>
      </form>
    </div>
  </div>
);        
};

export default Edit;
