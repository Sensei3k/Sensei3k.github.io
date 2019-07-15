import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class Contact extends React.Component{
  render(){
    return(
      <div id="contact">
        <div className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-full-desktop is-full-tablet">
                <h2 className="black-title-contact details">contact.</h2>
                <div className="contact-info-wrapper" >
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
                  <div className="column is-half-desktop is-hidden-mobile profile-picture">
                    <img id="profile-pic" src="images/IMG_6484.jpg" title="Profile Image" />
                  </div>
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
