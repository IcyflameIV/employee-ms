import React,{useState, useContext}  from 'react'
import './login.css'
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { auth } from './firebase';


const Login =() => {
    const[error, setError]=useState(false)
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const {dispatch}= useContext(AuthContext)
    const navigate= useNavigate()
    const handleSubmit = (e) =>{
       e.preventDefault();
       signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
   
    const user = userCredential.user;
    dispatch({type:"Login",payload:user})
   navigate('/Dashboard')
    
  })
  .catch((error) => {
   setError(true)
  });

}
  return (
    
    <div className='form mx-auto shadow p-5 '>
    < form onSubmit={handleSubmit}>
      <div className="col-12  p-3"><h1><i class="bi bi-person"></i></h1></div>
       <div className="form-floating mb-3">
       <input type="email" autoComplete="email" class="form-control" id="floatingInput" placeholder="username" 
       onChange={(e)=> setEmail(e.target.value)}
      />
          <label for="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" autoComplete="current-password" className="form-control" id="floatingPassword" placeholder="Password"
          onChange={(e)=> setPassword(e.target.value)}/>
          <label for="floatingPassword">Password</label>
          
        </div> 
              <div className="col-12 p-3">
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
        {error && <span>Invalid Username or Password!</span>}
        </form>
            </div>     
  )
}

export default Login


