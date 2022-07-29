import { useContext } from 'react';
import { NEXT_PAGE, PREVIOUS_PAGE } from '../../constants/constants';
import MainContext from '../../context/MainContext';
import './Pagination.css';

const Pagination = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <section className="pagination">
      <button
        disabled={state.currentPage <= 1}
        onClick={() => dispatch({ type: PREVIOUS_PAGE })}
      >
        Predchádzajúca
      </button>
      <h4>
        {state.currentPage} / {state.pages}
      </h4>
      <button
        disabled={state.currentPage >= state.pages}
        onClick={() => dispatch({ type: NEXT_PAGE })}
      >
        Nasledujúca
      </button>
    </section>
  );
};

export default Pagination;
