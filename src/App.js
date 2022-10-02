import React,{ useContext } from 'react'
import Dashboard from './pages/dashboard'
import Main from './pages/memberlist/main'
import Add from './pages/memberlist/add'
import Edit from './pages/memberlist/edit'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './login/login'
import { AuthContext } from './login/AuthContext'
import Notfound from './pages/notfound'


function App() {
  const {currentUser}= useContext(AuthContext)


const RequireAuth=({children}) =>{
  return currentUser ?(children): <Navigate to ="/"/>;
}

  return (
    
    <BrowserRouter>
    <div className='Home'>
           
      <Routes>
        <Route  path='/' element={<Login/>}/> 
        <Route  element={<Notfound/>}/> 
        <Route  path='/Dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}/> 
        <Route  path='/Members' element={<RequireAuth><Main/></RequireAuth>}/>
        <Route  path='/Add' element={<RequireAuth><Add/></RequireAuth>}/>
        <Route  path='/Edit/:id' element={<RequireAuth><Edit/></RequireAuth>}/>
   </Routes> 
    </div>
    </BrowserRouter>
  )
}

export default App