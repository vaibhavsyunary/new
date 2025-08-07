import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assests'

const LoginPopup = ({setShowLogin, setIsLogin}) => {
  const [currentState, setCurrentState] = useState("Login");
  const [userinfo,setUserInfo] = useState({
    username:"",
    email:"",
    password: "",

  });
  const handleChange = (e) => {
    setUserInfo(prev => ({
      ...prev, [e.target.name]:e.target.value
    }))
  }


  const createAccount = (e) => {
     e.preventDefault();
    if (!userinfo.email || !userinfo.password) {
  alert("Please fill all fields.");
  return;
}
   
    localStorage.setItem('info', JSON.stringify(userinfo));
    setUserInfo({
      username:"",
      email:"",
      password:""
    });
    setCurrentState("Login")
    
  }


  const login = (e) => {

    e.preventDefault();

    if (!userinfo.email || !userinfo.password) {
      alert("Please fill all fields.");
     return;
      }
    const userData = JSON.parse(localStorage.getItem('info'));
    if (userData.email === userinfo.email && userData.password === userinfo.password) {
      // alert('good login');
      setIsLogin(true)
    }  else {
      console.log('bruh');
      
    }
  }

  return (
    <div className='login-popup'>
      <form  className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {
          currentState === "Login"
          ?<></>
          :<input
           type="text"
            placeholder='Your name' required
            onChange={handleChange}
            value={userinfo.username}
            name='username'
             />}
         
          <input
           type="email"
            name="email"
             id="email"
              placeholder='Your Email'
               required
                onChange={handleChange}
            value={userinfo.email}
           
                />
          <input
           type="password"
            placeholder='Password'
             required
             name='password'
              onChange={handleChange}
            value={userinfo.password}
          
              />
        </div>
        <button onClick={currentState=== "Sign Up" ? createAccount: login}>{currentState==="Sign Up"? "Create account" :"Login"}</button>
        <div className="login-popup-condition">
        
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
          {
          currentState==="Login"
          ?<p>Create a new account? <span onClick={()=> setCurrentState("Sign Up")}>click here</span></p>
          : <p>Already have an account? <span onClick={()=> setCurrentState("Login")}>Login here</span></p>
          }
          
         

        </div>
      </form>
    </div>
  )
}

export default LoginPopup