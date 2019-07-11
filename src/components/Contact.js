import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class Contact extends React.Component{
  render(){
    return(
      <div id="contact" className="section">
        <div className="container">
          <div className="columns">
            <div className="column">

              <h2 className="black-title">contact.</h2>

              <div className="columns is-vcentered has-text-centered" >
                <div className="column contact-icons">

                  <a className="button" href="mailto:oyawoye.ade@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span> Email</span>
                  </a>

                  <a className="button" href="https://github.com/Sensei3k/" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                  </a>

                  <a className="button" href="https://www.linkedin.com/in/adetola-oyawoye/" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                  </a>

                </div>
                <div className="column is-half-desktop is-hidden-mobile">
                  <img id="profile-pic" src="images/IMG_6484.jpg" title="Profile Image" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Contact
