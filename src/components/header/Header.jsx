import React from 'react'
import './header.css'
import CTA from './CTA'
import IMG from '../../assets/walken.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Johnny</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* <div className="me">
          <img src={IMG} alt="placeholder" />
        </div>  */}
        <a className="scroll-down" href="#contact">Scroll Down</a>
      </div>   
    </header>
  )
}

export default Header