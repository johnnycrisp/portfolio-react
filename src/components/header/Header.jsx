import React from 'react'
import './header.css'
import CTA from './CTA'
import IMG from '../../assets/walken.png'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/johnny-profile.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Johnny</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <div className="wrapper">
                        <div class="box3d">
                            <div className="p1"><img src={ME} alt="johnny profile " /></div>
                            <div className='p2'><img src={ME} alt="johnny profile " /></div>
                            <div className='p3'><img src={ME} alt="johnny profile " /></div>
                            <div className='p4'><img src={ME} alt="johnny profile " /></div>
                            <div className='p5'><img src={ME} alt="johnny profile " /></div>
                            <div className='p6'><img src={ME} alt="johnny profile " /></div>
                        </div>
                    </div>

                    <CTA />
        <HeaderSocials />
        {/* <div className="me">
          <img src={IMG} alt="placeholder" />
        </div>  */}
        <a className="scroll-down" href="#contact">Contact</a>
      </div>   
    </header>
  )
}

export default Header