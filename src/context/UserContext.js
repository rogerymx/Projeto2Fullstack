import React, { createContext, useReducer } from "react";

const initialState = {
  users: [],
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "FILTER_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
