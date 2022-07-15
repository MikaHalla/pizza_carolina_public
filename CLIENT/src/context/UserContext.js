import { createContext, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({});
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();
    const user = { name, password };
    const res = await fetch(`http://localhost:5000/register`, {
      // 'https://arcane-thicket-55711.herokuapp.com/register'
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    setName('');
    setPassword('');
    setActiveUser(data);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const user = { name, password };
    const res = await fetch(`http://localhost:5000/login`, {
      // 'https://arcane-thicket-55711.herokuapp.com/login'
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    setName('');
    setPassword('');

    switch (res.status) {
      case 200:
        const data = await res.json();
        data.isLoggedIn = true;
        setActiveUser(data);
        return activeUser;
      case 400:
        setError('Incorrect username or password.');
        return error;
      default:
        throw new Error();
    }
  };

  const logOut = () => setActiveUser({});

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        activeUser,
        registerUser,
        loginUser,
        logOut,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
