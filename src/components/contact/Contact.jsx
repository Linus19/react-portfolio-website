import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qk0x96q', 'template_upv8icu', form.current, '_qyWkUffxdkv2ewhq')
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lkiprono7@gmail.com</h5>
            <a href='mailto:lkiprono7@gmail.com' target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>linus kiprono</h5>
            <a href='https://www.facebook.com/hulk.likiro/'target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'
            />
            <h4>Whatsapp</h4>
            <h5>+254726463884</h5>
            <a href='https://api.whatsapp.com/send?phone+254726463884'target='blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
<input type="text" name="name" placeholder='Your Full Name'required/>
<input type="email" name="email" placeholder='your email'required/>
<textarea name='message' rows='7' placeholder='your message' required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact