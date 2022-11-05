import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../layout/navbar";
import { db } from "../../login/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";


const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetchData = async()=>{
    let list=[]
    try{
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    }
   catch (error){
      console.log(error);
    }
  };
  fetchData();
}, []);
 


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
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
            {data.map((data, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{data.Firstname}</td>
                <td>{data.Lastname}</td>
                <td>{data.Email}</td>
                <td>{data.Role}</td>
                <td>
                  <Link
                    className="btn btn-outline-light"
                    to="/Edit/${data.id}"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </Link>
                  <Link 
                    className="btn btn-outline-light  mr-2"
                    onClick={() =>handleDelete(data.id)}
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
