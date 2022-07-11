import React from 'react';
import PizzaList from '../../components/PizzaList/PizzaList';
import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';
import Hero from '../../components/Hero/Hero';
import Cart from '../../components/Cart/Cart';
import PizzaContext from '../../context/PizzaContext';
import { useContext } from 'react';
import History from '../../components/History/History';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const { isLoading } = useContext(PizzaContext);

  return (
    <>
      <Hero />
      <Search />
      {isLoading ? <Spinner /> : <PizzaList />}
      <History />
      <Footer />
      <Cart />
    </>
  );
};

export default Home;
