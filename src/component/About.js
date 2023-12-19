import React from 'react'

const About = () => {
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
    <div className = "about_outer_main" id='aboutSection' >
    <div className='About-contener' >
    <div className="about_heading">
            <h1>About me</h1>
            <h4>My introduction</h4>
        </div>
        <div className="about_flex_container">
               <img src="/images/img2.jpg" alt="" className="about_image1" />
      
            <div className="about_info">
                {/* <div className="three_box">
                    <div className="box1">
                    <i className="bi bi-fast-forward-circle"></i>
                    </div>
                    <div className="box2">
                    <i class="bi bi-alarm"></i>
                    </div>
                    <div className="box3">
                    <i class="bi bi-award"></i>
                    </div>
                </div> */}
                <div className='about_para'>
                 <p>Greetings! I'm <strong>Nikhil</strong>, a Full Stack Web Developer passionate about crafting seamless web experiences. With a focus on innovation and user-centric design , I bring a blend of creativity and technical expertise to every project. Let's build something extraordinary together!</p>
                 </div>
                 <div>
                    <div className="about_button_outerside">
                 <button className="btn-home-1" onClick={handleDownload}>Download CV</button>
                 </div>
                 </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About