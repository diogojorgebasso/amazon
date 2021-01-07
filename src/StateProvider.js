import React, { createContext, useContext, usereducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={usereducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateContext = () => useContext(StateContext);
