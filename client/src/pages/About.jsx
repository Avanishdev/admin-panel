import React from "react";
export const About=()=>{
  return <>
    <main>
      <section className="section-about">
        <div className="container grid grid-two-cols">
          <div className="about-content">
            <p>Welcome, Avanish Developer</p>
            <h1 className="main-heading">Why Choose Us?</h1>
            <p>Expertise. Our team of experienced IT professionals who are passionate about
              staying up-to-date with the latest industry trends.
            </p>
            <br />
            <p>Customization. We understand that early business is unique. That's why
              we create solutions that are tailored to your specific needs and goals.
            </p>
            <br />
            <p>Affordability. We offer competitive pricing without compromising on the quality
              of our services.
            </p>
            <br />
            <p>Reliability. Count on us to be there when you need us. We're commited
              to ensuring your IT enviournment is reliable and available 24/7.
            </p>
            <div className="btn btn-group">
            <a href="/contact">
              <button className="btn">Connect Now</button>
            </a>
            <a href="/service">
              <button className="btn secondary-btn">Learn More</button>
            </a>
          </div>
          </div>
          <div className="about-image">
            <img src="" alt="avanishdeveloper.com" width="500" height="400"/>
          </div>
        </div>
      </section>
    </main>
  </>
};