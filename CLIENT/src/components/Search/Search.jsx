import { useContext } from 'react';
import './Search.css';
import MainContext from '../../context/MainContext';
import { CHANGE_SEARCH_TEXT } from '../../constants/constants';

const Search = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <section id="search">
      <p className="search-tips">
        <strong>TIP:</strong> Pri vyhľadávaní môžete použiť názov
        pizze, ale aj kategóriu <em>(napr. "pikantná")</em>, alebo
        ingrediencu <em>(napr. "huby").</em>
        <br />
        Kliknutím na názov pridáte pizzu medzi obľúbené.
      </p>
      <input
        type="text"
        value={state.searchText}
        placeholder="Hľadaný výraz..."
        onChange={(e) =>
          dispatch({
            type: CHANGE_SEARCH_TEXT,
            payload: e.target.value,
          })
        }
      ></input>
    </section>
  );
};

export default Search;
