import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <Header/>
    <section className='contactsection'>
  <form action="#" method="post">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required="" />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required="" />
    <label htmlFor="message">Message:</label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required=""
      defaultValue={""}
    />
    <button type="submit">Submit</button>
  </form>
</section>
<Footer/>
    </>
  );
}

export default Contact;
