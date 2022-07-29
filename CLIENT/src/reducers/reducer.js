import {
  CHANGE_SEARCH_TEXT,
  TOGGLE_LOADING,
  TOGGLE_MOBILE_MENU,
  PAGES,
  CURRENT_PAGE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  LOGIN_USER,
  LOGOUT_USER,
  // TOGGLE_FAVORITE_PIZZA,
  FETCH_PIZZAS,
  ADD_PIZZA_TO_CART,
} from '../constants/constants';

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    case TOGGLE_MOBILE_MENU:
      return { ...state, mobileMenu: !state.mobileMenu };
    case CHANGE_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case PREVIOUS_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    case PAGES:
      return { ...state, pages: action.payload };
    case LOGIN_USER:
      return { ...state, activeUser: action.payload };
    case LOGOUT_USER:
      return { ...state, activeUser: {}, mobileMenu: false };
    case FETCH_PIZZAS:
      return { ...state, pizzas: action.payload };
    case ADD_PIZZA_TO_CART:
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          { id: action.payload, ordered: 1 },
        ],
      };
    // case TOGGLE_FAVORITE_PIZZA:
    //   return {
    //     ...state,
    //     pizzas: [
    //       ...pizzas,
    //       (pizzas[action.payload].isFavorite =
    //         !pizzas[action.payload].isFavorite),
    //     ],
    //   };
    default:
      throw new Error();
  }
};
export default reducer;
