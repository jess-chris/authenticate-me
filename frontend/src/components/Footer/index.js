import React from 'react';
import { useHistory } from 'react-router-dom';
import './Footer.css';

function Footer({ sessionUser }) {

  const history = useHistory();

  if(!sessionUser) history.push("/");

  return (
    <footer id='footer'>
      <p>About</p>
      <p>Jobs</p>
      <p>Blog</p>
      <p>Devel</p>
      <p>Guide</p>
      <p>Help </p>
      <p>Privacy</p>
      <p>Terms</p>
      <p>Cookies</p>
      <p>English</p>
      <p>SmugMug+Flimg.</p>
    </footer>
  );
}

export default Footer;