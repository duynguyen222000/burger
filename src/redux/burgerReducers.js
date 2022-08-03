import { ADD_CAKE, REMOVE_CAKE } from "./types/types";

const initialState = {
  burger: [],
  menu: [
    { id: 1, name: "salad", price: 10, amount: 0 },
    { id: 2, name: "cheese", price: 20, amount: 0 },
    { id: 3, name: "beef", price: 55, amount: 0 },
  ],

  total: 0,
};

const burgerReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CAKE:
      let index = state.menu.findIndex((item) => item.id === payload.id);
      if (index !== -1) {
        state.menu[index].amount += 1;
        state.menu = [...state.menu];
      }
      state.total = state.menu.reduce((a, b) => (a += b.price * b.amount), 0);

      console.log(index);
      state.burger = [...state.burger, payload];

      return { ...state };
    case REMOVE_CAKE:
      let i = state.menu.findIndex((item) => item.id === payload.id);
      let a = state.burger.findIndex((item) => item.id === payload.id);

      if (i !== -1) {
        if (state.menu[i].amount < 1) {
          alert("is empty");
        } else {
          state.menu[i].amount -= 1;
          state.burger.splice(a, 1);
        }
      }
      state.total = state.menu.reduce((a, b) => (a += b.price * b.amount), 0);
      state.burger = [...state.burger];
      state.menu = [...state.menu];
      return { ...state };
    default:
      return state;
  }
};

export default burgerReducers;
