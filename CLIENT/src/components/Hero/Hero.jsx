import React from 'react';
import { useContext } from 'react';
import { TOGGLE_MOBILE_MENU } from '../../constants/constants';
import MainContext from '../../context/MainContext';
import './Hero.css';

const Hero = () => {
  const { state, dispatch } = useContext(MainContext);
  return (
    <section
      className="hero"
      onClick={() =>
        state.mobileMenu && dispatch({ type: TOGGLE_MOBILE_MENU })
      }
    >
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
