import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PizzaContext from '../../context/PizzaContext';
import './Cart.css';

const Cart = () => {
  const { pizzas } = useContext(PizzaContext);
  return (
    <>
      {pizzas.some((pizza) => pizza.ordered > 0) && (
        <Link to="/checkout">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      )}
    </>
  );
};

export default Cart;
