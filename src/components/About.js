import React from 'react'


class About extends React.Component{
  render(){
    return(
      <section className="section about-sec">
        <div  id="about" className="container">
          <div className="columns">
            <div className="column">
              <h2 className="black-title"> about. </h2>
              <p>
                At the core of my career fulfilment and gratification is my ability to provide solutions to problems and challenges. In my role as a customer service consultant, I was able to put this to good use but always felt I needed a bigger challenge.
              </p>
              <br />
              <p>
                I chose the software developer path after leaving my job in 2018 to challenge myself further and make a career switch. I was self-taught for about a year before I decided to take up programming professionally and hone my problem-solving skills.
              </p>
              <br />
              <p>
                During the course of the Software Engineering Immersive program at General Assembly, I have further built on my problem-solving skills, creativity and perseverance as well as my drive to create novel ideas.
              </p>
              <br />
              <p>
                I am looking for a job opportunity as a Software Engineer which combines my natural and acquired skills and also gives room for me to grow and challenge myself in a creative and enabling workspace.
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
