import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [member, setMember] = useState({
    first: "",
    last: "",
    email: "",
    role: "",
  });

  const onInputchange = (e) => {
    setMember({ ...member, [e.target.first]: e.target.value });
  };

  useEffect(() => {
    loadMember();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:3003/Members/${id}", member);
    navigate("/Members");
  };

  const { first, last, email, role } = member;

  const loadMember = async () => {
    const result = await axios.get("http://localhost:3003/Members/${id}");
    setMember(result.data);
  };
  return (
    <div className="container">
      <div className="mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label for="first">Firstname</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="first"
                value={first}
                onChange={(e) => onInputchange(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="last">Lastname</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="last"
                value={last}
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
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={(e) => onInputchange(e)}
              />
            </div>
            <div className="form-group col-md-4">
              <label for="inputRole">Role</label>
              <div className="col-auto my-4">
                <label className="mr-sm-4 sr-only"></label>
                <select className="custom-select mr-sm-4">
                  <option selected>Choose...</option>
                  <option value="1">Member</option>
                  <option value="2">Admin</option>
                  <option value="3">Manager</option>
                  name='role' value={role}
                  onChange={(e) => onInputchange(e)}
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
