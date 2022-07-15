import { useContext } from 'react';
import './Search.css';
import PizzaContext from '../../context/PizzaContext';

const Search = () => {
  const { searchText, setSearchText } = useContext(PizzaContext);

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
        value={searchText}
        placeholder="Hľadaný výraz..."
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
    </section>
  );
};

export default Search;
