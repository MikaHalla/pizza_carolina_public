import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PizzaContext from '../../context/PizzaContext';
import UserContext from '../../context/UserContext';
import './DesktopMenu.css';

const DesktopMenu = () => {
  const { amountInBasket } = useContext(PizzaContext);
  const { logOut, activeUser } = useContext(UserContext);
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
      {activeUser.isLoggedIn && (
        <Link to={`/user/${activeUser.id}`}>
          <h4>
            <i className="fa-solid fa-user"></i> {activeUser.name}
          </h4>
        </Link>
      )}
      {!activeUser.isLoggedIn && (
        <Link to="/login">
          <h4>Prihlásiť</h4>
        </Link>
      )}
      {activeUser.isLoggedIn && (
        <Link to="/" onClick={() => logOut()}>
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
