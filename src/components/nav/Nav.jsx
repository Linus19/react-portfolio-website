import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FcServices} from 'react-icons/fc'
import {RiContactsFill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''} ><FaUserTie/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><BsBriefcaseFill/></a>
      <a href='#services'onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}><FcServices/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><RiContactsFill/></a>

    </nav>
  )
}

export default Nav