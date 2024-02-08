import React, { useState, useEffect } from "react";


const Contact = () => {
  // State for form fields


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [ismessage, setMessage] = useState(false);
  const [isMessageFail, setFailMessage] = useState(false);

  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission

  // ... other code ...

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    try {
      const response = await fetch("https://portfolio-backend-o9xlx35ry-niknshindes-projects.vercel.app/formData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        clearFormData(); // Clear the form data here
        setIsSubmitted(true); // Trigger a re-render
        setMessage(true);
      } else {
        setFailMessage(true);
      }
    } catch (error) {
      setFailMessage(true);

    }
  };

  // useEffect hook at the top level of your functional component
  useEffect(() => {
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  setInterval(() =>{
    if(ismessage){
      setMessage(false);
    }
    if(isMessageFail){
      setFailMessage(false);
    }
  }
  ,2000)



  return (
    <div className="skill_outer" id="contactSection">
      <div className="skill_heading">
        <h1>Contact me</h1>
        <h4>Get In Touch</h4>
      </div>

      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <div className="alert_div">
              {ismessage ? <h2 className="success">Form Submitted Successfully</h2> : " " }
              {isMessageFail ? <h2 className="fail">Error in Form Submission</h2> : " " }

          </div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
