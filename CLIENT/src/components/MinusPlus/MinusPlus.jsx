import React from 'react';
import './MinusPlus.css';
import { useContext } from 'react';
import MainContext from '../../context/MainContext';

const MinusPlus = ({ id }) => {
  const { addPizzaToBasket, removePizzaFromBasket } =
    useContext(MainContext);

  return (
    <div className="plus-minus">
      <svg
        viewBox="0 0 100 100"
        className="increase-ordered"
        onClick={() => removePizzaFromBasket(id)}
      >
        <path
          d="M62.09,19.13l-33.9,23.8c-6.24,4.38-6.16,11.43,0.17,15.67l33.92,22.7c6.75,4.52,15.82-0.32,15.82-8.44V27.44
		C78.1,19.21,68.83,14.4,62.09,19.13z M70.1,53.89h-28v-6h28V53.89z"
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        className="decrease-ordered"
        onClick={() => addPizzaToBasket(id)}
      >
        <path
          d="M37.96,81.09l33.9-23.8c6.24-4.38,6.16-11.43-0.17-15.67l-33.92-22.7c-6.75-4.52-15.82,0.32-15.82,8.44v45.42
		C21.95,81.01,31.22,85.82,37.96,81.09z M29.95,46.33h11v-11h6v11h11v6h-11v11h-6v-11h-11V46.33z"
        />
      </svg>
    </div>
  );
};

export default MinusPlus;
