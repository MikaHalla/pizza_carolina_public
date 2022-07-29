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
import MainContext from './context/MainContext';
import './App.css';

function App() {
  const { state } = useContext(MainContext);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {state.activeUser.isLoggedIn && (
          <Route
            path={`/user/${state.activeUser.id}`}
            element={<User />}
          />
        )}
        <Route
          path="/login"
          element={
            state.activeUser.isLoggedIn ? (
              <Navigate to={`/user/${state.activeUser.id}`} />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            state.activeUser.isLoggedIn ? (
              <Navigate to={`/user/${state.activeUser.id}`} />
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
