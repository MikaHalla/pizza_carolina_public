import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const User = () => {
  const { activeUser } = useContext(UserContext);
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
      {activeUser.isLoggedIn ? (
        <h1>{`username:  ${activeUser.name}`}</h1>
      ) : (
        ''
      )}
      <Link to="/">Späť na hlavnú stránku</Link>
    </section>
  );
};

export default User;
