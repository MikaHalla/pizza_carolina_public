import React from 'react';
import './BasketAmount.css';

const BasketAmount = ({ value }) => {
  return <h4 className="basket-amount">{value} ks</h4>;
};

export default BasketAmount;
