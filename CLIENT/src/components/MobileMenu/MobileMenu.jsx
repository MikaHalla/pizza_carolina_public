import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PizzaContext from '../../context/PizzaContext';
import UserContext from '../../context/UserContext';
import './MobileMenu.css';

const MobileMenu = () => {
  const { mobileMenu, toggleMobileMenu } = useContext(PizzaContext);
  const { logOut, activeUser } = useContext(UserContext);

  const handleLogOut = () => {
    toggleMobileMenu();
    logOut();
  };

  return (
    <div className={`mobile-menu ${mobileMenu && 'active'}`}>
      <i
        className="fa-solid fa-circle-xmark"
        onClick={() => toggleMobileMenu()}
      ></i>
      {activeUser.isLoggedIn && (
        <Link
          to={`/user/${activeUser.id}`}
          onClick={() => toggleMobileMenu()}
        >
          <h2>{activeUser.name}</h2>
        </Link>
      )}
      {!activeUser.isLoggedIn && (
        <Link to="/login" onClick={() => toggleMobileMenu()}>
          <h2>Prihlásiť</h2>
        </Link>
      )}
      <Link to="/checkout" onClick={() => toggleMobileMenu()}>
        <h2>Košík</h2>
      </Link>
      {activeUser.isLoggedIn && (
        <Link to="/" onClick={() => handleLogOut()}>
          <h2>Odhlásiť</h2>
        </Link>
      )}
    </div>
  );
};

export default MobileMenu;
