import React from "react";

const Home = () => {

    const handleDownload =() =>{
        const pdfFilePath = '/pdfs/CV.pdf';
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = "CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);



    }
  return (
    <div className="hero-container hero_container_outerpart" id="homeSection">
      
        <div className="home-content">
          <h1>Nikhil Shinde 🖐️</h1>
          <h3> ━ Full STACK DEVELOPER</h3>
          <p>With expertise in both front-end finesse and back-end functionality, I specialize in creating user-friendly and powerful web applications that make an impact.</p>
          <div className="about_button_outerside">
          <button className="btn-home-1" onClick={handleDownload}>Download CV</button>
          <a href = "mailto: ns8830603789@gmail.com"><button className="btn-home-2">Contact Me</button>
</a>

          </div>
        </div>


          <img src="/images/img13.png" alt="" className="hero-image" />
       
      </div>
  );
};

export default Home;
