import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

export function useAuthContext() {
  const context = useContext(AuthContext);
  return context;
}
