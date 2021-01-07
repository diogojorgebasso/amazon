export const initialState = {
  basket: [],
};
//selector
export const GetBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0); //summing items
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.slice(index, 1);
      } else {
        console.warn("Cant remove product. Try again.");
      }
      console.log({...state, (basket: newBasket)});
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default reducer;
