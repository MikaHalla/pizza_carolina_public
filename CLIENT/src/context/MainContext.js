import {
  createContext,
  useState,
  useEffect,
  useReducer,
} from 'react';
import {
  TOGGLE_LOADING,
  PAGES,
  CURRENT_PAGE,
  PIZZAS_PER_PAGE,
  LOGIN_USER,
  FETCH_PIZZAS,
} from '../constants/constants';
import reducer from '../reducers/reducer';

const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    mobileMenu: false,
    searchText: '',
    pages: 1,
    currentPage: 1,
    shoppingCartAmount: 0,
    activeUser: {},
    pizzas: [],
    shoppingCart: [],
  });

  /* only refactored code above this line */

  useEffect(() => {
    console.log(state);
  }, [state]);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const [state.pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [amountInBasket, setAmountInBasket] = useState(0);

  const addPizzaToBasket = (id) => {
    const newPizzas = state.pizzas;
    const activePizza = state.pizzas[id - 1];
    !activePizza.ordered
      ? (activePizza.ordered = 1)
      : activePizza.ordered++;
    newPizzas[id - 1] = activePizza;
    // setPizzas([...newPizzas]);
  };

  const removePizzaFromBasket = (id) => {
    const newPizzas = state.pizzas;
    const activePizza = state.pizzas[id - 1];
    !activePizza.ordered
      ? (activePizza.ordered = 1)
      : activePizza.ordered--;
    newPizzas[id - 1] = activePizza;
    // setPizzas([...newPizzas]);
  };

  const removeOneItemFromBasket = (id) => {
    const newPizzas = state.pizzas;
    const activePizza = state.pizzas[id - 1];
    activePizza.ordered = 0;
    activePizza.ingredients.forEach(
      (ingr) => (ingr.isUnwanted = false)
    );
    newPizzas[id - 1] = activePizza;
    // setPizzas([...newPizzas]);
  };

  const sendOrder = () => {
    const newOrder = {
      user: state.activeUser.id,
      pizzas: [...state.pizzas],
    };
    console.log(newOrder);
    cleanBasket();
  };

  const addToFavorites = (id) => {
    const newPizzas = state.state.pizzas;
    const activePizza = state.state.pizzas[id - 1];
    activePizza.isFavorite = !activePizza.isFavorite;
    newPizzas[id - 1] = activePizza;
    // setPizzas([...newPizzas]);
  };

  const addToUnwanted = (id, ingr) => {
    const newPizzas = state.pizzas;
    const activePizza = state.pizzas[id - 1];
    const index = activePizza.ingredients.indexOf(ingr);
    activePizza.ingredients[index].isUnwanted =
      !activePizza.ingredients[index].isUnwanted;
    newPizzas[id - 1] = activePizza;
    // setPizzas([...newPizzas]);
  };

  const indexOfLastPizza = state.currentPage * PIZZAS_PER_PAGE;
  const indexOfFirstPizza = indexOfLastPizza - PIZZAS_PER_PAGE;

  const displayOnlyThesePizzas = filteredPizzas.slice(
    indexOfFirstPizza,
    indexOfLastPizza
  );

  useEffect(() => {
    setAmountInBasket(
      state.pizzas
        .filter((pizza) => pizza.ordered > 0)
        .reduce((curr, add) => curr + add.ordered, 0)
    );
  }, [state.pizzas]);

  const fetchPizzas = async () => {
    const res = await fetch(
      // 'https://arcane-thicket-55711.herokuapp.com/api/pizza'
      'http://192.168.100.150:5000/api/pizza'
    );
    const data = await res.json();

    dispatch({ type: FETCH_PIZZAS, payload: data });
    setFilteredPizzas(data);
    dispatch({ type: TOGGLE_LOADING });
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  const cleanBasket = () => fetchPizzas();

  useEffect(() => {
    dispatch({
      type: PAGES,
      payload: Math.ceil(filteredPizzas.length / PIZZAS_PER_PAGE),
    });
  }, [filteredPizzas]);

  //filter pizza list to only items including search text
  useEffect(() => {
    setFilteredPizzas(
      state.pizzas.filter(
        (pizza) =>
          pizza.name
            .toLowerCase()
            .includes(state.searchText.toLowerCase()) ||
          pizza.category
            .toLowerCase()
            .includes(state.searchText.toLowerCase()) ||
          (pizza.isFavorite &&
            state.searchText.toLowerCase().includes('fav')) ||
          pizza.ingredients.some((ingred) =>
            ingred.name
              .toLowerCase()
              .includes(state.searchText.toLowerCase())
          ) ||
          (pizza.tags &&
            pizza.tags.some((tag) =>
              tag
                .toLowerCase()
                .includes(state.searchText.toLowerCase())
            ))
      )
    );
    dispatch({ type: CURRENT_PAGE, payload: 1 });
  }, [state.searchText]);

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
    dispatch({ type: LOGIN_USER, payload: data });
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
        dispatch({ type: LOGIN_USER, payload: data });
        return state.activeUser;
      case 400:
        setError('Incorrect username or password.');
        return error;
      default:
        throw new Error();
    }
  };

  return (
    <MainContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        registerUser,
        loginUser,
        error,
        // pizzas,
        filteredPizzas,
        displayOnlyThesePizzas,

        addPizzaToBasket,
        removePizzaFromBasket,
        removeOneItemFromBasket,
        cleanBasket,
        amountInBasket,

        addToFavorites,
        addToUnwanted,

        sendOrder,

        state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
