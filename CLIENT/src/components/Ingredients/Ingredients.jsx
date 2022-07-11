import React from 'react';
import './Ingredients.css';
import PizzaContext from '../../context/PizzaContext';
import { useContext } from 'react';

const Ingredients = ({ id, ingredients }) => {
  const { addToUnwanted } = useContext(PizzaContext);

  return (
    <div className="ingredients">
      {ingredients.map((ingr, idx) => (
        <div
          className={`ingredient ${ingr.isUnwanted && 'unwanted'}`}
          key={idx}
          onClick={() => addToUnwanted(id, ingr)}
        >
          {ingr.name}
        </div>
      ))}
    </div>
  );
};

export default Ingredients;
