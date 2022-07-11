import React from 'react';
import { useContext } from 'react';
import PizzaContext from '../../context/PizzaContext';
import './Hero.css';

const Hero = () => {
  const { closeMobileMenu } = useContext(PizzaContext);
  return (
    <section className="hero" onClick={closeMobileMenu}>
      <div className="headline">
        <h1>Pizzéria CAROLINA</h1>
        <h3>Pizza pečená na bukovom dreve</h3>
      </div>
      <a href="#search">
        <button>vybrať pizzu</button>
      </a>
    </section>
  );
};

export default Hero;
