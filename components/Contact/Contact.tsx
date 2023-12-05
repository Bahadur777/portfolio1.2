import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import { CiLinkedin } from "react-icons/ci";
import {FaWhatsapp} from 'react-icons/fa'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zk5k85m', 'template_c2edlp4', form.current, 'hb1XdW3ZNlXKXguAC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact' >
       <div className="contact-container">
      <h2 className='text-[45px] font-bold  uppercase my-5'>Get in touch</h2>
      <div className="container">
        <div className="container_option">
          <div className="option">
             <div className="option-content">
                  <article className='option_card'>
                    <FiMail className='trbc'/>
                    <h4>Email</h4>
                    <h5>bahadurmia8@gmail.com</h5>
                    <a href="mailto:bahadurmia8@gmail.com" target='_blank'>Sent a massage</a>
                  </article>
                  <article className='option_card'>
                    <CiLinkedin className='trbc'/>
                    <h4>Messenger</h4>
                    <h5>Bahadur mia shihab</h5>
                    <a href="https://www.linkedin.com/in/bahadur-mia-shihab/" target='_blank'>Sent a massage</a>
                  </article>
                  <article className='option_card'>
                    <FaWhatsapp  className='trbc'/>
                    <h4>WhatsApp</h4>
                    <h5>01782808177</h5>
                    <a href="https://api.whatsapp.com/send?+8801782808177" target='_blank'>Sent a massage</a>
                  </article>
             </div>
          </div>
          <div className="form_option">
            <form action="" className='Form' ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder='Your Full Name' name='name' />
              <input type="email" placeholder='Your Email' name='email' />
              <textarea name="message" id="" cols="30" rows="10" placeholder='Your message'  ></textarea>
              <button className='form-btn py-4 px-5 rounded uppercase bold button-btn'>Send Message</button>
            </form>
          </div>
        </div>
         
      </div>
       </div>
    </section>
  )
}

export default Contact