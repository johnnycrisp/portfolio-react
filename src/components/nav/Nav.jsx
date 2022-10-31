import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {ImBooks} from 'react-icons/im'
import {MdOutlineDesignServices} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {useState} from 'react'


const Nav = () => {
const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a className={activeNav === '#' ? 'active' : ''} href="#" onClick={()=> setActiveNav('#')}><AiOutlineHome /></a>
      <a className={activeNav === '#about' ? 'active' : ''} href="#about" onClick={()=> setActiveNav('#about')}><AiOutlineUser /></a>
      <a className={activeNav === '#experience' ? 'active' : ''} href="#experience" onClick={()=> setActiveNav('#experience')}><ImBooks /></a> 
      <a className={activeNav === '#testimonials' ? 'active' : ''} href="#testimonials" onClick={()=> setActiveNav('#testimonials')}><MdOutlineDesignServices /></a>
      <a className={activeNav === '#contact' ? 'active' : ''} href="#contact" onClick={()=> setActiveNav('#contact')}><AiOutlineMail /></a>
      
    </nav>
  )
}

export default Nav