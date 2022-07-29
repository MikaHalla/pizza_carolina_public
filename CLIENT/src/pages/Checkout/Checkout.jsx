import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/MainContext';
import './Checkout.css';

const Checkout = () => {
  const { state, pizzas, removeOneItemFromBasket, sendOrder } =
    useContext(MainContext);

  return (
    <section className="checkout">
      {pizzas.some((pizza) => pizza.ordered > 0) ? (
        <>
          <div className="checkout-list">
            {pizzas
              .filter((pizza) => pizza.ordered > 0)
              .map((pizza, index) => (
                <div className="checkout-pizza" key={index}>
                  <p className="checkout-pizza-number">
                    {pizza.number}.
                  </p>
                  <h4 className="checkout-pizza-name">
                    {pizza.name}
                  </h4>
                  <p className="checkout-pizza-ordered">
                    {pizza.ordered}x
                  </p>
                  <p className="checkout-pizza-price">
                    € {(pizza.price * pizza.ordered).toFixed(2)}
                  </p>
                  <i
                    className="fa-solid fa-xmark remove-item"
                    onClick={() => removeOneItemFromBasket(pizza.id)}
                  ></i>
                  <div className="checkout-pizza-ingredients">
                    {pizza.ingredients
                      .filter((ingr) => ingr.isUnwanted === true)
                      .map((ingr) => (
                        <span>{ingr.name}, </span>
                      ))}
                  </div>
                </div>
              ))}
            <div className="total">
              <p>Zaplatiť celkom: </p>
              <h3>
                €{' '}
                {pizzas
                  .filter((pizza) => pizza.ordered > 0)
                  .reduce(
                    (curr, add) => curr + add.price * add.ordered,
                    0
                  )
                  .toFixed(2)}
              </h3>
            </div>
          </div>
          <Link
            to={state.activeUser.isLoggedIn ? '/thankyou' : '/login'}
          >
            <button
              onClick={
                state.activeUser.isLoggedIn &&
                /*cleanBasket*/ sendOrder
              }
            >
              Objednať
            </button>
          </Link>
        </>
      ) : (
        <h2>Váš košík je prázdny.</h2>
      )}
      <Link to="/">Späť na hlavnú stránku</Link>
    </section>
  );
};

export default Checkout;
