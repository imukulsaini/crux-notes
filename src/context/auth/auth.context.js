import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "./auth.reducer";

const authContext = createContext();

const initialState = {
  userData: null,
  isUserLogin: false,
  status: "idle",
};

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider
      value={{
        userData: state.userData,
        isUserLogin: state.isUserLogin,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}
