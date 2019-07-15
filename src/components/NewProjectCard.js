import React from 'react'


const NewProjectCard = ({ description, tech, title, type, image, link, git }) => {
  return(
    <section className="section">
      <div className=" columns is-centered">
        <div className="column is-two-thirds-tablet is-two-thirds-desktop">
          <div className="column is-one-half project_card">
            <p className="title is-4">{title}</p>
            <div className="content">
              <div className="content-overlay"></div>
              <img className="content-image" src={image}/>
              <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{type}</h3>
                <p className="content-text">{tech}</p>
                <p className="content-text">{description}</p>
                <div className="project-links">
                  <a href={git}>
                    <figure className="image">
                      {/* <img className="project-links" src={'../images/github.png'} alt='Github Icon'/> */}
                      <i className="fab fa-github-square"></i>
                    </figure>
                  </a>
                  <a href={link}>
                    <figure className="image">
                      {/* <img className="project-links-web" src={'../images/link.png'} alt='Web Icon'/> */}
                      <i className="fas fa-link"></i>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





export default NewProjectCard
