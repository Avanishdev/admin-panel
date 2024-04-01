import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import registerImage from '../assets/registeration-image.png';
import './Register.css';
import { useAuth } from "../store/auth";
const URL="http://localhost:5000/api/auth/register";

export const Register=()=>{
  const {storeTokenInLS}=useAuth();
  const navigate=useNavigate();
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  })
  //handling the change and value that user entered
  const handleChange=(e)=>{
    // console.log(e);
    let name=e.target.name;
    let value=e.target.value;
    //set user ne jo bh value chnge kiya hoga
    setUser({
      ...user,
      //dyanmic name to its value
      //username || email || phone || password
      [name]:value,
    })
  }
  //handling the form submission
  const handleSubmit=async(e)=>{
    // console.log(e);
    //by default page reloads
    e.preventDefault();
    // console.log(user);
    try {
      //postman ka kaam react me
      const response=await fetch(URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    });
    if(response.ok){
      //store token in local storage
      const res_data=await response.json();
      storeTokenInLS(res_data.token);
      //if we stored directly using localStorage.setItem(), we have to do 
        //it manually each and everywhere which is quite hectic so contextApi is used.
        // localStorage.setItem("token",serverToken) 
      //setting the user
      setUser({username:"",
      email:"",
      phone:"",
      password:"",});
      //if response.ok is true,navigate to login page
      navigate("/login");
    }
    // console.log(response);
    } catch (error) {
      console.log("register",error);
    }
    
  }
  return <>
    <section>
      <main>
        <div className="section-registeration">
          <div className="container grid grid-two-cols">
            <div className="registeration-form">
              <h1 className="main-heading mb3">Registeration form</h1>
              <br/>
              <form onSubmit={handleSubmit}>
                <div className="form-content">
                  <label htmlFor="username">username</label>
                  <input type="text" name="username" placeholder="username" 
                  id="username" required autoComplete="off" value={user.username} onChange={handleChange}/>
                  <label htmlFor="email">email</label>
                  <input type="email" name="email" placeholder="email" 
                  id="email" required autoComplete="off" value={user.email} onChange={handleChange}/>
                  <label htmlFor="number">phone no</label>
                  <input type="number" name="phone" placeholder="phone" 
                  id="phone" required autoComplete="off" value={user.phone} onChange={handleChange}/>
                  <label htmlFor="password">password</label>
                  <input type="password" name="password" placeholder="password" 
                  id="password" required autoComplete="off" value={user.password} onChange={handleChange}/>
                  <br />
                  <button type="submit" className="btn btn-submit">Register Now</button>
                </div>
              </form>
            </div>
            <div className="registeration-image">
              <img src={registerImage} alt="avanishdev.com" width="500" height="500"/>
            </div>
          </div>
        </div>
      </main>
    </section>
  </>;
};