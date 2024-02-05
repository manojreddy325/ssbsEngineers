import React,{useRef } from 'react';
import emailjs from '@emailjs/browser';
import Back from '../common/Header/Back';
import img from '../images/contact.jpg';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const Contact = () => {
    const form = useRef(null);

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_49y1o6a', 'template_h12zdpp', form.current, '5-QHU4nX5ikuun0oi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success('Thank you for your request. we will call you shortly!!', {position: toast.POSITION.BOTTOM_CENTER,autoClose:3000})
    };

    return(
        <>
        <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container mt'>
          <form className='shadow' ref={form} onSubmit={sendEmail}>
            <h4>Fillup The Form</h4> <br />
            <div>
              <label>Name: </label>
              <input name="from_name" type='text' placeholder='Name'  />
              <label>Email: </label>
              <input name="from_email" type='text' placeholder='Email' />
              <label>Phone Number:</label>
              <input name="phone_number" type='text' placeholder='Phone Number' />
            </div>
            <label>Message: </label>
            <textarea name="message" cols='30' rows='10' ></textarea>
            <input type='submit' value="Send" className='send-btn'/>
          </form>
        </div>
      </section>
        </>
    )
}
export default  Contact;