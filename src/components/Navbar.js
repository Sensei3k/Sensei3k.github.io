import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
  constructor(){
    super()

    this.state = {
      active: false
    }
    this.toggleActive = this.toggleActive.bind(this)
  }


  toggleActive(){
    this.setState({ active: !this.state.active })
  }

  render(){
    return(
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            {/* <div className="logo">
              <div>D.O</div>
            </div> */}
            <a
              role="button"
              // className={`navbar-burger${this.state.active ? ' is-active' : ''}`}
              className="navbar-burger skip"
              onClick={this.toggleActive}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
            <div id="menu" className="navbar-end">
              <a onClick={this.toggleActive} href="#about" className="navbar-item">about.</a>
              <a onClick={this.toggleActive} href="#TechSkills" className="navbar-item two">skills.</a>
              <a onClick={this.toggleActive} href="#projects" className="navbar-item three">projects.</a>
              <a onClick={this.toggleActive} href="#contact" className="navbar-item">contact.</a>
            </div>
          </div>
        </div>
      </nav>

    )
  }
}


export default Navbar
