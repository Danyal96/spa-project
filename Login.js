import { useState } from "react";
import {useNavigate } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import './Login.css'
import Swal from 'sweetalert2'

function Login() {

    
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    
    const navigate = useNavigate()
    
    const submithandler = ()=>{
        if(username=='danyal' && password=='12345'){
          document.cookie = "username=danyal; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
            navigate('/panel')
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'نام کاربری یا رمز عبور اشتباه است',
                icon: 'error',
                confirmButtonText: 'بستن'
              })
        }
    }


  return (
    <>
      <MyNavbar />

      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input onChange={(e)=>setUserName(e.target.value)} type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="" required="" />
            <label>Password</label>
          </div>
          {/* <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a> */}
          {/* <Link to='#' onClick={submithandler}>
          <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Link> */}
          <button className="btn" type="button" onClick={submithandler}>submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
