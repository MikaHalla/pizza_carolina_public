import { createContext, useState, useEffect } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [amountInBasket, setAmountInBasket] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);

  const addPizzaToBasket = (id) => {
    const newPizzas = pizzas;
    const activePizza = pizzas[id - 1];
    !activePizza.ordered
      ? (activePizza.ordered = 1)
      : activePizza.ordered++;
    newPizzas[id - 1] = activePizza;
    setPizzas([...newPizzas]);
    localStorage.setItem('pizzas', pizzas);
  };

  const removePizzaFromBasket = (id) => {
    const newPizzas = pizzas;
    const activePizza = pizzas[id - 1];
    !activePizza.ordered
      ? (activePizza.ordered = 1)
      : activePizza.ordered--;
    newPizzas[id - 1] = activePizza;
    setPizzas([...newPizzas]);
  };

  const removeOneItemFromBasket = (id) => {
    const newPizzas = pizzas;
    const activePizza = pizzas[id - 1];
    activePizza.ordered = 0;
    activePizza.ingredients.forEach(
      (ingr) => (ingr.isUnwanted = false)
    );
    newPizzas[id - 1] = activePizza;
    setPizzas([...newPizzas]);
  };

  const cleanBasket = () => fetchPizzas();
  // {
  //   const newPizzas = pizzas;
  //   newPizzas.forEach((pizza) => {
  //     pizza.ordered = 0;
  //     pizza.ingredients.forEach((ingr) => (ingr.isUnwanted = false));
  //   });
  //   setPizzas(newPizzas);
  //   setAmountInBasket(0);

  // };

  const addToFavorites = (id) => {
    const newPizzas = pizzas;
    const activePizza = pizzas[id - 1];
    activePizza.isFavorite = !activePizza.isFavorite;
    newPizzas[id - 1] = activePizza;
    setPizzas([...newPizzas]);
  };

  const addToUnwanted = (id, ingr) => {
    const newPizzas = pizzas;
    const activePizza = pizzas[id - 1];
    const index = activePizza.ingredients.indexOf(ingr);
    activePizza.ingredients[index].isUnwanted =
      !activePizza.ingredients[index].isUnwanted;
    newPizzas[id - 1] = activePizza;
    setPizzas([...newPizzas]);
  };

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const pizzasPerPage = 9;
  const indexOfLastPizza = currentPage * pizzasPerPage;
  const indexOfFirstPizza = indexOfLastPizza - pizzasPerPage;

  const displayOnlyThesePizzas = filteredPizzas.slice(
    indexOfFirstPizza,
    indexOfLastPizza
  );

  useEffect(() => {
    setAmountInBasket(
      pizzas
        .filter((pizza) => pizza.ordered > 0)
        .reduce((curr, add) => curr + add.ordered, 0)
    );
  }, [pizzas]);

  const fetchPizzas = async () => {
    const res = await fetch(
      // 'https://arcane-thicket-55711.herokuapp.com/api/pizza'
      'http://192.168.100.150:5000/api/pizza'
    );
    const data = await res.json();

    setPizzas(data);
    setFilteredPizzas(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPizzas();
    localStorage.getItem('pizzas');
  }, []);

  useEffect(() => {
    setPages(Math.ceil(filteredPizzas.length / pizzasPerPage));
  }, [filteredPizzas]);

  //filter pizza list to only items including search text
  useEffect(() => {
    setFilteredPizzas(
      pizzas.filter(
        (pizza) =>
          pizza.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          pizza.category
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          (pizza.isFavorite &&
            searchText.toLowerCase().includes('fav')) ||
          pizza.ingredients.some((ingred) =>
            ingred.name
              .toLowerCase()
              .includes(searchText.toLowerCase())
          ) ||
          (pizza.tags &&
            pizza.tags.some((tag) =>
              tag.toLowerCase().includes(searchText.toLowerCase())
            ))
      )
    );
    setCurrentPage(1);
  }, [searchText]);

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        filteredPizzas,
        displayOnlyThesePizzas,

        isLoading,

        searchText,
        setSearchText,

        addPizzaToBasket,
        removePizzaFromBasket,
        removeOneItemFromBasket,
        cleanBasket,
        amountInBasket,

        addToFavorites,
        addToUnwanted,

        pages,
        currentPage,
        setCurrentPage,

        mobileMenu,
        toggleMobileMenu,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
