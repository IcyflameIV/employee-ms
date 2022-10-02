import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [member, setMember] = useState({
    first: "",
    last: "",
    email: "",
    role: "",
  });

  const onInputchange = (e) => {
    setMember({ ...member, [e.target.first]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/Members", member);
    navigate("/Members");
  };
  const navigate = useNavigate();
  const { first, last, email, role } = member;
  return (
    <div className="container">
      <div className="mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add New User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="first">Firstname</label>
              <input
                type="text"
                class="form-control"
                id="first"
                placeholder=""
                onChange={(e) => onInputchange(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="last">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="last"
                placeholder=""
                onChange={(e) => onInputchange(e)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@gmail.com"
                onChange={(e) => onInputchange(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputRole">Role</label>
              <div className="col-auto my-4">
                <label className="mr-sm-4 sr-only" for="role"></label>
                <select className="custom-select mr-sm-4" id="role">
                  <option selected>Choose...</option>
                  <option value="1">Member</option>
                  <option value="2">Admin</option>
                  <option value="3">Manager</option>
                  onChange={(e) => onInputchange(e)}
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
