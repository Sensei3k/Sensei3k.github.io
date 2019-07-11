import React from 'react'
import ReactDOM from 'react-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import TechSkills from './components/TechSkills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import 'bulma'

import './style.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class App extends React.Component{
  render() {
    return(
      <main>
        <Navbar />
        <Home />
        <About />
        <TechSkills />
        <Projects />
        <Contact />
      </main>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
