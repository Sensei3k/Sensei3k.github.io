import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component{
  render(){
    return(
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container mobile">

            <h1 id="name-home-hero" className="terminal ">
              <span className="brackets">{'<'}</span>
              <span>{'Detola Oyawoye /'}</span>
              <span className="brackets">{'>'}</span>
            </h1>
            <hr />
            <h2 id="logo-sub" className="anim-typewriter terminal"> Full-Stack Web Developer</h2>
            {/* <img src="../images/python_logo.svg"></img> */}
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
