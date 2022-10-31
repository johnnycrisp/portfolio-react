import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/c-w.png'

const portItems = [
  {
    key: 1,
    image: IMG1,
    title: 'Some Title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    key: 2,
    image: IMG1,
    title: 'Some Title 2',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    key: 3,
    image: IMG1,
    title: 'Some Title 3',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Some Title 4',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {
          portItems.map(({key, image, title, github, demo}) => { 
                return (  <article key={key}className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer" >Github</a>
          <a href={demo} className="btn" target="_blank" rel="noreferrer">Live site</a>
          </div>
        </article>)
            }
          )
        }
        

      </div>
    </section>
  )
}

export default Portfolio