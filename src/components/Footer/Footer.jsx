import React from 'react';
import './Footer.css';

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

 return (
   <p>Made with ❤ by <a href='https://github.com/cecilialobo' target='_blank' rel="noreferrer">Cecilia Lobo</a> - © {year}</p>
 )
}

export default Footer;