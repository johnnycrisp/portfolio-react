import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_brk8mej', 'template_kfumadl', form.current, 'zbDE635HQFvSAk4Rt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      e.target.reset()
  };
  

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>dummyemail@email.com</h5>
              <a href="mailto:johnnycrisp2@gmail.com" target="_blank" rel="noreferrer" className="email-link">Send an email</a>
          </article>
          <article className="contact__option">
          <BsLinkedin className='contact__option-icon' />
              <h4>LinkedIn</h4>
              <h5>Johnny Crisp</h5>
              <a href="https://www.linkedin.com/in/johnny-c-a5737a14b/" target="_blank" rel="noreferrer" className="email-link">Check LinkedIn</a>
          </article>
          <article className="contact__option">
          <FaGithub className='contact__option-icon' />
              <h4>Github</h4>
              <a href="https://github.com/johnnycrisp" target="_blank" rel="noreferrer" className="email-link">Check Github</a>
          </article>
        </div>
        {/* CONTACT OPTIONS END */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder="Your Message" required rows="7"></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>

          {/* USE EMAIL.JS */}
        </form>
      </div>
    </section>
  )
}

export default Contact