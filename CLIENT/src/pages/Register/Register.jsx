import { useContext, useId } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import '../Login/Login.css';

const Register = () => {
  const { name, setName, password, setPassword, registerUser } =
    useContext(UserContext);

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
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor={`${id}-register-password`}>Heslo</label>
        <input
          type="password"
          id={`${id}-register-password`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => registerUser(e)}>Registrovať</button>
      </form>
      <p>
        Ak už máte účet, môžete sa <Link to="/login">prihlásiť</Link>.
      </p>
      <Link to="/">Späť na hlavnú stránku</Link>
    </div>
  );
};

export default Register;
