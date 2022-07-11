import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you">
      <h2>Ďakujeme za Vašu objednávku.</h2>
      <Link to="/">Späť na hlavnú stránku</Link>
    </div>
  );
};

export default ThankYou;
