import React,{useRef,useContext}from 'react';
import './Contact.css'
import CartContext from '../Store/CartContext';

const ContactUs = () => {
  const ctx = useContext(CartContext);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const teleRef = useRef('');
  const messageRef = useRef('');

  const addAFormHandler =(event)=>{
    event.preventDefault();
    const user={
      name : nameRef.current.value,
      email : emailRef.current.value,
      number : teleRef.current.value,
      message : messageRef.current.value, 
    }
    ctx.contactForm(user)
    teleRef.current.value='';
    nameRef.current.value = '';
    emailRef.current.value ='';
    messageRef.current.value="";

    // console.log(JSON.stringify(user));
          // ctx.contactForm(JSON.stringify(user));
  }

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form  onSubmit={addAFormHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" ref={nameRef}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  ref={emailRef}/>
        </div>
        <div className="form-group">
          <label htmlFor="number">Tele : </label>
          <input type="tel" id="number" name="number" ref={teleRef}/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" ref={messageRef}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
