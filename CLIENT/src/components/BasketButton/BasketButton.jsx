import React from 'react';
import { useContext } from 'react';
import PizzaContext from '../../context/PizzaContext';
import './BasketButton.css';

const BasketButton = ({ id, ordered }) => {
  const { addPizzaToBasket } = useContext(PizzaContext);
  return (
    <button
      className="basket-click"
      onClick={() => addPizzaToBasket(id)}
    >
      {ordered > 0 ? (
        `${ordered}x`
      ) : (
        <i className="fas fa-basket-shopping"></i>
      )}
    </button>
  );
};

export default BasketButton;
