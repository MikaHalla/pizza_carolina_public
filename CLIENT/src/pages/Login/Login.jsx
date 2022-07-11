import { useContext, useId } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './Login.css';

const Login = () => {
  const {
    name,
    setName,
    password,
    setPassword,
    loginUser,
    activeUser,
  } = useContext(UserContext);

  const id = useId();

  return (
    <div className="login-screen">
      <form>
        <label htmlFor={`${id}-register-username`}>
          Užívateľské meno
        </label>
        <input
          type="text"
          id={`${id}-register-username`}
          autoComplete="off"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor={`${id}-register-password`}>Heslo</label>
        <input
          type="password"
          id={`${id}-register-password`}
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={`/user/${activeUser.id}`}>
          <button onClick={(e) => loginUser(e)}>Prihlásiť</button>
        </Link>
      </form>
      <p>
        Ak ešte nemáte účet, môžete sa{' '}
        <Link to="/register">registrovať</Link>.
      </p>
      <Link to="/">Späť na hlavnú stránku</Link>
    </div>
  );
};

export default Login;
