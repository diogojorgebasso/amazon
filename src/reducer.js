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

    default:
      return state;
  }
};
export default reducer;
