import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LOGOUT_USER } from '../../constants/constants';
import MainContext from '../../context/MainContext';
import './DesktopMenu.css';

const DesktopMenu = () => {
  const { state, dispatch, amountInBasket } = useContext(MainContext);
  return (
    <section className="desktop-menu">
      {amountInBasket > 0 && (
        <Link to="/checkout">
          <h4>
            <i className="fa-solid fa-cart-shopping"></i> Košík
            <span className="cart-item-count">{amountInBasket}</span>
          </h4>
        </Link>
      )}
      {state.activeUser.isLoggedIn && (
        <Link to={`/user/${state.activeUser.id}`}>
          <h4>
            <i className="fa-solid fa-user"></i>{' '}
            {state.activeUser.name}
          </h4>
        </Link>
      )}
      {!state.activeUser.isLoggedIn && (
        <Link to="/login">
          <h4>Prihlásiť</h4>
        </Link>
      )}
      {state.activeUser.isLoggedIn && (
        <Link to="/" onClick={() => dispatch({ type: LOGOUT_USER })}>
          <h4>
            <i className="fa-solid fa-right-from-bracket"></i>{' '}
            Odhlásiť
          </h4>
        </Link>
      )}
    </section>
  );
};

export default DesktopMenu;
