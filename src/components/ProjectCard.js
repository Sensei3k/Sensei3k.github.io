import React from 'react'

const ProjectCard = ({  description, tech, title, type, link, git }) => {
  return (
    <div className="card">

      <div className="card-content is-spaced">
        <h3 className="title">{title}</h3>
        <hr />
        <p>{type}</p>
        <p className="subtitle">{tech}</p>
        <p>{description}</p>
        <br />
      </div>

      <a href={link} target="_blank"  rel="noopener noreferrer">
        <i className="fas fa-link"></i>
      </a>

      <a href={git} target="_blank"  rel="noopener noreferrer">
        <i className="fab fa-github-square"></i>
      </a>

    </div>

  )
}

export default ProjectCard
