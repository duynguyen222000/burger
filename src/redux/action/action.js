import { ADD_CAKE, REMOVE_CAKE } from "../types/types";

export const addCake = (payload) => ({
  type: ADD_CAKE,
  payload,
});
export const removeCake = (payload) => ({
  type: REMOVE_CAKE,
  payload,
});
