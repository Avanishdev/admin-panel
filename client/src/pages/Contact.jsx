import React, { useEffect, useState } from "react";
import './Contact.css';
import { useAuth } from "../store/auth";

export const Contact=()=>{
  const {contact}=useAuth();
  // console.log(contact);
  const [userData,setUserData]=useState(true);

  if(contact&&userData){
    setUser({
      username:contact.username,
      email:contact.email,
      message:"",
  })
  setUserData(false);
  }

  const [user,setUser]=useState({
    username:"",
    email:"",
    message:"",
  })
  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    //setting the user
    setUser({
      ...user,
      [name]:value,
    })
    //alternative
    // setUser((prev)=>({
    //   ...prev,
    //   [name]:value,
    // }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user);
  }
  return <div> 
    <main>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div className="form-content">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={user.username}
                  onChange={handleChange} required autoComplete="off"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={user.email}
                  onChange={handleChange} required autoComplete="off"/>
                <label htmlFor="message">Message</label>
                <textarea  rows="6" cols="30" name="message" id="message" value={user.message}
                  onChange={handleChange} required autoComplete="off"/>
                <br />
                <button type="submit" className="btn btn-group form-button">Submit</button>
              </div>
            </form>
          </section>
          <div className="contact-image">
              <img src="" alt="avanishdeveloper.com" width="500" height="500"/>
            </div>
        </div>
      </section>
      <section>
        <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5148309111564!2d75.93220677494277!3d22.74626767936834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3cd9d3de1ad%3A0xebaf3ee69f583ff5!2sPhoenix%20Citadel%20Mall!5e0!3m2!1sen!2sin!4v1705952549416!5m2!1sen!2sin" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  </div>
};