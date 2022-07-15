import './Navbar.css';
import logo from '../../assets/img/logo_Carolina.jpg';
import MobileMenu from '../MobileMenu/MobileMenu';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import PizzaContext from '../../context/PizzaContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { mobileMenu, toggleMobileMenu } = useContext(PizzaContext);
  return (
    <>
      <nav>
        <div className="wrap">
          <div className="nav-left">
            <Link to="/">
              <img src={logo} alt="" className="logo" />
            </Link>
            <div className="credentials">
              <p>
                <i className="fa-solid fa-phone"></i>041 / 500 30 30
              </p>
              <p>
                <i className="fa-solid fa-map-location-dot"></i>
                Národná 17, Žilina
              </p>
              <p>
                <i className="fa-solid fa-clock"></i>10:00 - 23:45
              </p>
            </div>
          </div>
          <div className="nav-right">
            {/* hamburger*/}
            {!mobileMenu && (
              <i
                className="fas fa-solid fa-bars"
                onClick={() => toggleMobileMenu()}
              ></i>
            )}
            {/* desktop menu */}
            <DesktopMenu />
          </div>
        </div>
      </nav>
      {/* mobile menu */}
      <MobileMenu />
    </>
  );
};

export default Navbar;
