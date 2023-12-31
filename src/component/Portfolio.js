import React from 'react'

const Portfolio = () => {
  return (
    <div className='skill_outer' id='portfolioSection' >
         <div className="skill_heading" >
        <h1>Portfolio</h1>
        <h4>Most recent work</h4>
      </div>
    <div className="portfolio_flex">
        {/* first box */}

         <div className="portfolio_box">
            <img className='portimg' src="/images/pimg1.png" alt="pimg1" />
            <div className="title">
                   <h2>News website</h2>
                <div className='portfolio_button'>
                <a className='aformpbn1' href="https://github.com/niknshinde/info-wave-website" target="_blank"><button className='pbtn pbtn1' >GitHub</button></a>
                    <a href="https://worrisome-tux-dove.cyclic.app/"><button className='pbtn pbtn2'>Live Demo</button></a>
                </div>
            </div>
         </div>


        {/* second box */}

        <div className="portfolio_box">
            <img className='portimg' src="/images/pimg3.png" alt="pimg1" />
            <div className="title">
                   <h2>News website</h2>
                <div className='portfolio_button'>
                <a className='aformpbn1' href="https://github.com/niknshinde/Cat_bucket" target="_blank"><button className='pbtn pbtn1' >GitHub</button></a>
                    <a href="https://cat-bucket.netlify.app/"><button className='pbtn pbtn2'>Live Demo</button></a>
                </div>
            </div>
         </div>


         {/* <div className="portfolio_box">
            <img className='portimg' src="/images/pimg3.png" alt="pimg1" />
            <div className="title">
                   <h2>News website</h2>
                <div className='portfolio_button'>
                <a className='aformpbn1' href="https://github.com/niknshinde/info-wave-website" target="_blank"><button className='pbtn pbtn1' >GitHub</button></a>
                    <a href="https://cat-bucket.netlify.app/"><button className='pbtn pbtn2'>Live Demo</button></a>
                </div>
            </div>
         </div> */}

    </div>
    </div>
  )
}

export default Portfolio