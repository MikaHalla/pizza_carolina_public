import React from 'react';
import { useContext } from 'react';
import { ADD_PIZZA_TO_CART } from '../../constants/constants';
import MainContext from '../../context/MainContext';
import './BasketButton.css';

const BasketButton = ({ id, ordered }) => {
  const { dispatch } = useContext(MainContext);
  return (
    <button
      className="basket-click"
      onClick={() =>
        dispatch({ type: ADD_PIZZA_TO_CART, payload: id })
      }
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
