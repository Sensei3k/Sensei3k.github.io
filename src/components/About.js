/* eslint-disable react/no-unescaped-entities */
import React from 'react'


class About extends React.Component{
  render(){
    return (
      <section className='section about-sec'>
        <div id='about' className='container'>
          <div className='columns'>
            <div className='column'>
              <h2 className='black-title'> about. </h2>
              <p>
                I am currently a freelance full stack developer in London,
                focusing mainly on Front End projects in React.js for clients from retailers to
                celebrities. I am interested in creating exciting and meaniful
                applications to enhance and develop the way we live and work.
              </p>
              <br />
              <p>
                At the core of my career fulfilment and gratification is my
                ability to provide solutions to problems and challenges. I've spent the last few years as a customer service consultant and rose to management level, I was able to put this to
                good use but always felt I needed a bigger challenge.
              </p>
              <br />
              <p>
                I chose the software developer path after leaving my job in 2018
                to challenge myself further and make a career switch. I was
                self-taught for about a year before I decided to take up
                programming professionally and hone my problem-solving skills.
              </p>
              <br />
              <p>
                During my time at General Assembly London, I have further built
                on my problem-solving skills, creativity and perseverance as
                well as my drive to create novel ideas and most importantly
                become a better developer.
              </p>

              {/* <a href="#" id="back-to-top" title="Back to top"><i className="fas fa-angle-double-up top"></i></a> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default About
