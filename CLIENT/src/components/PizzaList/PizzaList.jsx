import React from 'react';
import './PizzaList.css';
import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import PizzaItem from '../PizzaItem/PizzaItem';
import Pagination from '../Pagination/Pagination';

const PizzaList = () => {
  const { state, displayOnlyThesePizzas } = useContext(MainContext);
  return (
    <div className="pizza-list-container">
      <ul>
        {displayOnlyThesePizzas.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
      {state.pages > 1 && <Pagination />}
    </div>
  );
};

export default PizzaList;
