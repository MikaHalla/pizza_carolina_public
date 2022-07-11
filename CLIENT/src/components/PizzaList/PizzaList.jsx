import React from 'react';
import './PizzaList.css';
import { useContext } from 'react';
import PizzaContext from '../../context/PizzaContext';
import PizzaItem from '../PizzaItem/PizzaItem';
import Pagination from '../Pagination/Pagination';

const PizzaList = () => {
  const { pages, displayOnlyThesePizzas } = useContext(PizzaContext);
  return (
    <div className="pizza-list-container">
      <ul>
        {displayOnlyThesePizzas.map((pizza) => (
          <PizzaItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
      {pages > 1 && <Pagination />}
    </div>
  );
};

export default PizzaList;
