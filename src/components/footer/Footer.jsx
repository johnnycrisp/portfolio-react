import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <a href="#" className="footer__logo">LOGO</a>

    <ul>
      <li> <a href="#">Home</a></li>
      <li> <a href="#">About</a></li>
      <li> <a href="#">Experience</a></li>
      <li> <a href="#">Portfolio</a></li>
      <li> <a href="#">Testimonials</a></li>
      <li> <a href="#">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="">LinkedIn</a>
      <a href="">Github</a>
      <a href="">Lichess</a>

    </div>
    </footer>
  )
}

export default Footer