import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component{
  render(){
    return(
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container mobile">

            {/* <h1 id="name-home-hero" className="terminal "> */}
            {/* <span className="brackets">{'<'}</span> */}
            {/* <span>Detola Oyawoye</span> */}
            {/* <span className="brackets">{'>'}</span> */}
            <div className="wrapper">
              <div className="letters">
                <span className="letter">D</span>
                <span className="letter">e</span>
                <span className="letter">t</span>
                <span className="letter">o</span>
                <span className="letter">l</span>
                <span className="letter">a</span>
                <span className="letter"> </span>
                <span className="letter">O</span>
                <span className="letter">y</span>
                <span className="letter">a</span>
                <span className="letter">w</span>
                <span className="letter">o</span>
                <span className="letter">y</span>
                <span className="letter">e</span>
              </div>
              <p>Full Stack Web Developer</p>
            </div>
            {/* <hr />
            <h2 id="logo-sub" className="anim-typewriter terminal"> Full-Stack Web Developer</h2> */}
            <a href="#about">
              <div id="scroll-chevron" className="fade-in bounce">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
