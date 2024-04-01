import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import loginImage from '../assets/registeration-image.png';
import './Login.css'
import { useAuth } from "../store/auth";
const URL="http://localhost:5000/api/auth/login";

export const Login=()=>{
  const navigate=useNavigate();
  const {storeTokenInLS}=useAuth();
  //user contains all details of user which is a state var
  //and setUser is the update function for user
  const [user,setUser]=useState({
    email:"",
    password:"",
  });
  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    //setting the user
    setUser({
      ...user,
      //dynamic name for each value
      [name]:value,
    });
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(user);
    try {
      const response=await fetch(URL,{
        method:"POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify(user),
      });
      if(response.ok){
        alert("Login successfull.");
        //store token in local storage
        const res_data=await response.json();
        storeTokenInLS(res_data.token);
        //if we stored directly using localStorage.setItem(), we have to do 
          //it manually each and everywhere which is quite hectic so contextApi is used.
          // localStorage.setItem("token",serverToken) 
        //setting the user
        setUser({
        email:"",
        password:"",});
        navigate("/");
      }else{
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.log("login",error);
    }
  }
  return <div>
    <section className="section-login">
      <div className="container grid grid-two-cols">
        <div className="login-form">
          <h1 className="main-heading mb3">Login form</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={user.email}
                    placeholder="email" required autoComplete="off" onChange={handleChange}/>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={user.password}
                    placeholder="password" required autoComplete="off" onChange={handleChange}/>
              <br />
              <button type="submit" className="btn btn-submit">Login</button>
            </div>
          </form>
        </div>
        <div className="login-image">
          <img src={loginImage} alt="avanishdev.com" width="500" height="500"/>
        </div>
      </div>
    </section>
  </div>;
};