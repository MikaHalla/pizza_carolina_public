import PizzaList from '../../components/PizzaList/PizzaList';
import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';
import Hero from '../../components/Hero/Hero';
import Cart from '../../components/Cart/Cart';
import PizzaContext from '../../context/PizzaContext';
import { useContext } from 'react';
import History from '../../components/History/History';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  const { isLoading } = useContext(PizzaContext);

  return (
    <>
      <Hero />
      <main className="pizza-list-and-history">
        <div className="pizza-list-and-history-left">
          <Search />
          {isLoading ? <Spinner /> : <PizzaList />}
        </div>
        <div className="pizza-list-and-history-right">
          <History />
        </div>
      </main>
      <Footer />
      <Cart />
    </>
  );
};

export default Home;
