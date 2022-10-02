import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../layout/navbar";

const Main = () => {
  const [Members, setMember] = useState([]);
  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    const result = await axios.get("http://localhost:3003/Members");
    setMember(result.data);
  };
  const deleteMember = async (id) => {
    await axios.delete("http://localhost:3003/Members/${id}");
    loadMembers();
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="py-4"></div>
        <h1>Members</h1>

        <Link className="btn btn-outline-light" to="/Add">
          <i class="bi bi-plus-lg"></i>Add New{" "}
        </Link>

        <table
          class="table border shadow table-hover table-dark
            table-bordered"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {Members.map((member, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{member.first}</td>
                <td>{member.last}</td>
                <td>{member.email}</td>
                <td>{member.role}</td>
                <td>
                  <Link
                    className="btn btn-outline-light"
                    to="/Edit/${member.id}"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </Link>
                  <Link
                    className="btn btn-outline-light  mr-2"
                    onClick={() => deleteMember(member.id)}
                  >
                    <i class="bi bi-trash"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
