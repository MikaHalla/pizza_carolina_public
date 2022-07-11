import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout';
import ThankYou from './pages/ThankYou/ThankYou';
import UserContext from './context/UserContext';
import './App.css';

function App() {
  const { activeUser } = useContext(UserContext);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {activeUser.isLoggedIn && (
          <Route path={`/user/${activeUser.id}`} element={<User />} />
        )}
        <Route
          path="/login"
          element={
            activeUser.isLoggedIn ? (
              <Navigate to={`/user/${activeUser.id}`} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            activeUser.isLoggedIn ? (
              <Navigate to={`/user/${activeUser.id}`} />
            ) : (
              <Register />
            )
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
