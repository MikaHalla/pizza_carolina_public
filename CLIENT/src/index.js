import React from 'react';
import ReactDOM from 'react-dom/client';
import { PizzaProvider } from './context/PizzaContext';
import { UserProvider } from './context/UserContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </UserProvider>
  </React.StrictMode>
);
