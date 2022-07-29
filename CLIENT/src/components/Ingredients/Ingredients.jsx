import React from 'react';
import './Ingredients.css';
import MainContext from '../../context/MainContext';
import { useContext } from 'react';

const Ingredients = ({ id, ingredients }) => {
  const { addToUnwanted } = useContext(MainContext);

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
