import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../layout/navbar";

const Main = () => {
  const [data, setData] = useState([]); 
  const [query, setQuery] = useState('');


  function getData() {
    axios.get(`https://64849202ee799e321626d351.mockapi.io/ems`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }
  
  useEffect(() => {
    getData();
  }, []);

  function setToLocal(id, Firstname, Lastname, Email, Role) {
    localStorage.setItem('id', id);
    localStorage.setItem('Firstname', Firstname);
    localStorage.setItem('Lastname', Lastname);
    localStorage.setItem('Email', Email);
    localStorage.setItem('Role', Role);
  }


  function deleteHandler(id) {
    axios.delete(`https://64849202ee799e321626d351.mockapi.io/ems/${id}`).then(() => {
      getData();
    });
  }

  const filteredData = data.filter((row) => {
    const { Firstname, Email } = row;
    const lowerCaseQuery = query.toLowerCase();
    return (
      Firstname.toLowerCase().includes(lowerCaseQuery) ||
      Email.toLowerCase().includes(lowerCaseQuery)
    );
  })

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="py-4"></div>
        <h1>Members</h1>

        <Link className="btn btn-outline-light" to="/Add">
          <i class="bi bi-plus-lg"></i>Add New{" "}
        </Link>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button class="btn btn-outline-success">
            <i class="bi bi-search"></i>
          </button>
        </form>
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
             {filteredData.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.id}</th>
                <td>{row.Firstname}</td>
                <td>{row.Lastname}</td>
                <td>{row.Email}</td>
                <td>{row.Role}</td>
                <td>
                  <Link
                    className="btn btn-outline-light"
                    to="/Edit"
                    onClick={() =>
                      setToLocal(
                        row.id,
                        row.Firstname,
                        row.Lastname,
                        row.Email,
                        row.Role)}
                  >
                    <i class="bi bi-pencil-square"></i>
                  </Link>
                  <Link 
                    className="btn btn-outline-light  mr-2"
                    onClick={() =>deleteHandler(row.id)}
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
