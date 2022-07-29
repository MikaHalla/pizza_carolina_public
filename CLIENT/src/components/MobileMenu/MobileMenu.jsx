import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  LOGOUT_USER,
  TOGGLE_MOBILE_MENU,
} from '../../constants/constants';
import MainContext from '../../context/MainContext';
import './MobileMenu.css';

const MobileMenu = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div className={`mobile-menu ${state.mobileMenu && 'active'}`}>
      <i
        className="fa-solid fa-circle-xmark"
        onClick={() => dispatch({ type: TOGGLE_MOBILE_MENU })}
      ></i>
      {state.activeUser.isLoggedIn && (
        <Link
          to={`/user/${state.activeUser.id}`}
          onClick={() => dispatch({ type: TOGGLE_MOBILE_MENU })}
        >
          <h2>{state.activeUser.name}</h2>
        </Link>
      )}
      {!state.activeUser.isLoggedIn && (
        <Link
          to="/login"
          onClick={() => dispatch({ type: TOGGLE_MOBILE_MENU })}
        >
          <h2>Prihlásiť</h2>
        </Link>
      )}
      <Link
        to="/checkout"
        onClick={() => dispatch({ type: TOGGLE_MOBILE_MENU })}
      >
        <h2>Košík</h2>
      </Link>
      {state.activeUser.isLoggedIn && (
        <Link to="/" onClick={() => dispatch({ type: LOGOUT_USER })}>
          <h2>Odhlásiť</h2>
        </Link>
      )}
    </div>
  );
};

export default MobileMenu;
