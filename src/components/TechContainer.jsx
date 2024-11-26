import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from 'react-icons/di'

import '../styles/components/techs.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass  /> },
]

const TechContainer = () => {
  return (
    <section className='tech-container'>
      <h2>Tecnologias</h2>
      <div className='tech-grid'>
        {technologies.map((tech) => {
          return (
            <div className="tech-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="tech-info">
                <h3>{tech.name}</h3>
                <p></p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechContainer
