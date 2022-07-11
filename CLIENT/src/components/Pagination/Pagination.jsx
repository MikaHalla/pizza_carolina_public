import { useContext } from 'react';
import PizzaContext from '../../context/PizzaContext';
import './Pagination.css';

const Pagination = () => {
  const { pages, currentPage, setCurrentPage } =
    useContext(PizzaContext);

  return (
    <section className="pagination">
      <button
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        Predchádzajúca
      </button>
      <h4>
        {currentPage} / {pages}
      </h4>
      <button
        disabled={currentPage >= pages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Nasledujúca
      </button>
    </section>
  );
};

export default Pagination;
