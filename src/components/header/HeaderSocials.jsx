import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/linus-kiprono-ba2ba8143' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Linus19' target='_blank'><FaGithubSquare/></a>
        <a href='https://dribble.com' target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials