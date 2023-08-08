import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useFireAuth = () => {
  return useContext(AuthContext);
};

export default useFireAuth;
