import React,{useContext, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import axios from 'axios'
import env from '../enviroinment'
import {useNavigate} from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import '../CSS/Login.css';
import Navbar1 from './Navbar1';
import { EmployeeContext } from '../Context';




function Login() {
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [toggle,setToggle]=useState(false)
  let [message,setMessage]=useState("")
  let navigate = useNavigate()
  const context1 =useContext(EmployeeContext)

 const handleAdminLogin = async ()=>{ 
    let res2 = await axios.post(`${env.apiurl}/users/signinAdmin`,{
      email,
      password
    })

    if((res2.data.statusCode===200 ) )
      { localStorage.setItem('token',res2.data.token)
          await handleAdminVerify()
      }
  else{
    setMessage(res2.data.message)
  }}

  const handleAdminVerify = async ()=>{ 
  let res3 = await axios.get(`${env.apiurl}/users/adminRoleAuth`)
     console.log(res3)
     if (res3.data.data ===  "Admin")
      {
         navigate('/Dashboard1')
      }
      else{alert ("Only Admin has Access")}
  }
  
  let handleForgotpass = async ()=>{ navigate('/Forgot')}

  let handleLogin = async ()=>{
    setToggle(true)
    let res = await axios.post(`${env.apiurl}/users/signin`,{
      email,
      password
    })
    
    if(res.data.statusCode===200)
    {
        setToggle(false)
       localStorage.setItem('token',res.data.token)
       context1.leadLength()
       context1.requestLength()
       navigate('/Dashboard')
    }
    else
    {
      setToggle(false)
      setMessage(res.data.message)
      setTimeout(()=>{
        setMessage("")
      },3000)

    }
  }
  return <>
  <Navbar1 />
  <div className ="wallpaper">
    <div className="login-wrapper">
      <h1>Welcome to App</h1>
      <p>Login to Continue</p>
    </div>
    <div className='login-main-wrapper'>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Group>

        <Button className ="mx-2" variant="primary" onClick={()=>handleLogin()}>
          Login
       </Button>
         <Button className ="mx-2"variant="primary" onClick={()=> handleAdminLogin()}>
          Admin Login
        </Button>
        <Button className ="mx-2" variant="primary" onClick={()=>handleForgotpass()}>
          Forgot Password
        </Button>
      </Form>
      <p className='Guidelines'>Guidelines :
           1)Normal login applicable for Admin, Employee & NEmployee(who dont have anyrights)
           2)Admin login aplicable for whos role is admin and after login admin can change role.
           3)Normal login as a Admin & Employee can open leads and service request and can perform CRUD operation in leads and service request.
           4)Normal login as a NEmployee can just see no. of leads and request.(not able to perform CRUD)
           </p>
      {toggle?<Spinner animation="border" variant="primary" />:<></>}
      {message?<div style={{"color":"red","textAlign":"center"}}>{message}</div>:<></>}
    </div>  
    </div>
  </>
}

export default Login