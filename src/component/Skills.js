import React from 'react';

const Skills = () => {
  return (
    <div className = "skill_outer" id="skillsSection" >
      <div className="skill_heading" >
        <h1>Skills</h1>
        <h4>My technical level</h4>
      </div>
      <div className="skill_section_flex">
        <div className="box1 box">
          <h2 >Frontend Developer</h2>
          <hr className='box_title' />
          <div className="f-skills">
            <div className="inner_flex">
              <div>
                <h3>HTML</h3>
                <p>Intermediate</p>
              </div>

              <div>
                <h3>Bootstrap</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="inner_flex">
              <div>
                <h3>CSS</h3>
                <p>Intermediate</p>
              </div>

              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="inner_flex">
              <div>
                <h3>JavaScript</h3>
                <p>Intermediate</p>
              </div>

              <div>
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="box1 box">
          <h2>Backend Developer</h2>
          <hr className='box_title' />

          <div className="f-skills">
            <div className="inner_flex">
              <div>
                <h3>Node.Js</h3>
                <p>Intermediate</p>
              </div>

              <div>
                <h3>Express</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="inner_flex">
              <div>
                <h3>Mongodb</h3>
                <p>Intermediate</p>
              </div>

              <div>
                <h3>EJS</h3>
                <p>Intermediate</p>
              </div>
            </div>

            <div className="inner_flex">
              <div>
                <h3>API's</h3>
                <p>Intermediate</p>
              </div>

              <div>
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
