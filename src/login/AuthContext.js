import { createContext, useEffect, useReducer } from "react";
import Auth from "./Auth";
const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Auth, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
