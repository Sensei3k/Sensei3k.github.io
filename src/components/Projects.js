import React from 'react'
import ProjectCard from './ProjectCard'
// import Carousel from './Carousel'

class CardShow extends React.Component{
  constructor(){
    super()

    this.state = {
      data: [
        {
          id: '1',
          title: 'Space Invaders',
          tech: 'Python | Flask | PostgreSQL | React | Webpack | Ajax | JavaScript (ES6) | HTML5 | Bulma (CSS framework) | SCSS | Heroku',
          description: 'Remake of clsssic the arcade game. This simple grid-based interactive game is built on Vanilla JavaScript. the players objective is to defeat all alien invaders whilst preventing them from reaching earth.',
          type: 'JavaScript ES6',
          link: 'https://sensei3k.github.io/SEI-Project-01/',
          git: 'https://github.com/Sensei3k/SEI-Project-01'
        },
        {
          id: '2',
          title: 'Football Data Center',
          tech: 'Python | Flask | PostgreSQL | React | Webpack | Ajax | JavaScript (ES6) | HTML5 | Bulma (CSS framework) | SCSS | Heroku',
          description: 'My partner and I built a simple React app, to display professional football data. The user can view league and club data across Europes top 5 leagues.',
          type: 'React App',
          link: 'https://sensei3k.github.io/SEI-Project-2/',
          git: 'https://github.com/Sensei3k/SEI-Project-2'
        },
        {
          id: '3',
          title: 'Crush' ,
          tech: 'Python | Flask | PostgreSQL | React | Webpack | Ajax | JavaScript (ES6) | HTML5 | Bulma (CSS framework) | SCSS | Heroku',
          description: 'Crush is a Full-Stack project built on the MERN (Mongo, Express, React, NodeJS) stack. Crush is an online dating app where users can create a profile and find matches based on their interests, distance, sexual preference and age.',
          type: 'Full-Stack',
          link: 'https://crush-sei.herokuapp.com/#/',
          git: 'https://github.com/Sensei3k/SEI-PROJECT-03'
        },
        {
          id: '4',
          title: 'Bata Wura',
          tech: 'Python | Flask | PostgreSQL | React | Webpack | Ajax | JavaScript (ES6) | HTML5 | Bulma (CSS framework) | SCSS | Heroku',
          description: 'A recreational sport meet up app which allows users to create their own sports events and users can join them.',
          type: 'Full Stack',
          link: 'https://golden-boot.herokuapp.com/#/',
          git: 'https://github.com/Sensei3k/SEI-Project-04'
        }
      ]
    }
  }

  render(){
    // console.log(this.state.data, 'data')
    const classes = 'column is-mutiline is-half-desktop is-full-tablet is-full-mobile'
    return(
      <div id="projects">
        <section   className="section">
          <div className="container">

            <h2 className="black-title black-title is-full-tablet">projects.</h2>

            <div className="columns is-multiline">
              {this.state.data.map(projectCard =>
                <div key={projectCard.id} className={classes}>
                  <ProjectCard {...projectCard} />

                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    )
  }
}


export default CardShow
