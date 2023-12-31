import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>

        {/* <div className="footer_flex">
       <div className="meInfo">
          <h2>Nikhil Shinde</h2>
          <p>
          I'm a Full Stack Web Developer, skilled in crafting user-friendly frontend interfaces and implementing robust backend functionality. My expertise ensures the success of websites and web applications from end to end.
          </p>
       </div>

       <div className="social">
        <h3>Social</h3>
        <a href="">lin</a>
        <a href="">git</a>
       
       </div>

       </div>

       <hr />
       <div className="center_text">
        <p>	&#169; Copyright 2024</p>
       </div> */}
       <div className="social">
         <h2>Social</h2>
         <div className="logo_social">
         <a href="https://github.com/niknshinde"><h1 class="bi bi-github"></h1></a>
         <a href="https://www.linkedin.com/in/nikhil-shinde18/"><h1 class="bi bi-linkedin"></h1></a>
         </div>
         <div className="center_text">
        <p>	&#169; Copyright 2024</p>
       </div> 
       </div>

    </div>
  )
}
