import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../../login/firebase"
import { collection,serverTimestamp, updateDoc} from "firebase/firestore";


const Edit = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const handleInput = (e) => {
    const id =e.target.id;
    const value = e.target.value;
  
    setData({ ...data, [id]:value });
  };
  console.log(data);
const OnSubmit = async (e) => {
    e.preventDefault();
    try{
  
  await updateDoc(collection(db, "users"), {
    Firstname:true,
    Lastname:true ,
    Email:false,
    Role: false,
    TimeStamp: serverTimestamp()
    });
    navigate("/Members");
  }
  catch(err){
    console.log(err)
 }
 
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
              value={data.Firstname}
              onChange={handleInput}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Lastname</label>
            <input
              id="last"
              className="form-control"
              type="text"
              value={data.Lastname}
              onChange={handleInput}
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
              value={data.Email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group col-md-4">
            <label for="inputRole">Role</label>
            <div className="col-auto my-4">
              <select className="custom-select mr-sm-4"  onChange={handleInput} id="role" value={data.Role}>
                <option selected>Choose...</option>
                <option value="Member">Member</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
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
