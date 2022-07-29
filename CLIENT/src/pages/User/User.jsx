import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/MainContext';

const User = () => {
  const { state } = useContext(MainContext);
  return (
    <section
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      {state.activeUser.isLoggedIn ? (
        <h1>{`username:  ${state.activeUser.name}`}</h1>
      ) : (
        ''
      )}
      <Link to="/">Späť na hlavnú stránku</Link>
    </section>
  );
};

export default User;
