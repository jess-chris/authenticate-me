import React from 'react';
import { useHistory } from 'react-router-dom';
import './Footer.css';

function Footer({ sessionUser }) {

  const history = useHistory();

  if(!sessionUser) history.push("/");

  return (
    <footer id='footer'>
      <p>NodeJS</p>
      <p>Express</p>
      <p>Postgresql</p>
      <p>Sequelize</p>
      <p>React</p>
      <p>Redux </p>
      <p>Developed by: Jesse Christensen</p>
    </footer>
  );
}

export default Footer;