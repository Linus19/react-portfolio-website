import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'
const Services = () => {
  return (
   <section id="services">
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX DESIGN</h3>
        </div>
        <ul className="service__list">
          <li>
            <BsCheck className='service__list-icon'/>
            <p>I have experience with Adobe XD</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>I have good experience using figma</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>I have skills using Balsamiq in designing prototypes</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BsCheck className='service__list-icon'/>
            <p>I have done projects offering frontend development using react js, html and css </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>I have done projects working with Apis like daraja and other rest apis</p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>I have done projects in backend development using php and python</p>
          </li>
          
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Software Development</h3>
        </div>
        <ul className="service__list">
          <li>
            <BsCheck className='service__list-icon'/>
            <p>I have done projects using python for developing software </p>
          </li>
          <li>
            <BsCheck className='service__list-icon'/>
            <p>I have done projects using php</p>
          </li>
          
        </ul>
      </article>
    </div>
   </section>
  )
}

export default Services