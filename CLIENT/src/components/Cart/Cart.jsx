import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/MainContext';
import './Cart.css';

const Cart = () => {
  const { state } = useContext(MainContext);
  return (
    <>
      {state.shoppingCart.some((item) => item.ordered > 0) && (
        <Link to="/checkout">
          <div className="floating-cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cart;
