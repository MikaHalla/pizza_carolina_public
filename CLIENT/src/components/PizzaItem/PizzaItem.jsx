import React from 'react';
import { useContext } from 'react';
import PizzaContext from '../../context/PizzaContext';
import BasketButton from '../BasketButton/BasketButton';
import Ingredients from '../Ingredients/Ingredients';
import MinusPlus from '../MinusPlus/MinusPlus';
import './PizzaItem.css';

const PizzaItem = ({
  pizza: {
    id,
    number,
    name,
    weight,
    price,
    ingredients,
    ordered,
    isFavorite,
  },
}) => {
  const { addToFavorites } = useContext(PizzaContext);

  return (
    <section
      className={`pizza-item ${ordered > 0 && 'item-ordered'}`}
    >
      <div className="headline">
        <h5 className={`number ${ordered > 0 && 'number-ordered'}`}>
          {ordered > 0 ? `${ordered}x` : `${number}.`}
        </h5>
        <div className="pizza-name-and-weight">
          {isFavorite && (
            <i
              className="fa-solid fa-star"
              style={{ color: 'gold', margin: '0 -0.2em 0 0' }}
            ></i>
          )}
          <h5
            className="pizza-name"
            onClick={() => addToFavorites(id)}
          >
            {name}
          </h5>
          <p className="pizza-weight">{weight} g</p>
        </div>
        <h3 className="pizza-price">
          <span className="price-sign">€</span>
          {ordered > 0
            ? (price * ordered).toFixed(2)
            : price.toFixed(2)}
        </h3>
      </div>

      {ordered > 0 ? (
        <MinusPlus id={id} ordered={ordered} />
      ) : (
        <BasketButton id={id} ordered={ordered} />
      )}

      <Ingredients id={id} ingredients={ingredients} />
    </section>
  );
};

export default PizzaItem;
