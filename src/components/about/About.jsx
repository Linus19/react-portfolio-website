import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me2"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>

            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ clients satisfied</small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 30+ completed</small>

            </article>
          </div>
          <p>
          I am linus kiprono.I am  php and javascript developer Bachelor’s degree in
computer science .Knowledge of PHP web frameworks
including Laravel, and CodeIgniter.Knowledge of front-end
technologies including CSS3, JavaScript(React js), and HTML5.
Understanding of object-oriented PHP programming.
Previous experience creating scalable applications.
Proficient with code versioning tools including Git,
Mercurial, CVS, and SVN.Familiarity with SQL/NoSQL
databases. Ability to project manage. Good problemsolving skills.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About