import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { getToken } from "../service/storeService";

const useAutoLogin = () => {
  const dispatch = useDispatch();
  return async () => {
    try {
      console.log("refresh");
      const token = getToken();
      if (!token) return;
      const dataFromToken = jwtDecode(token);
      console.log("dataFromToken", dataFromToken);
      dispatch(authActions.login(dataFromToken));
    } catch (err) {
      localStorage.clear();
    }
  };
};

export default useAutoLogin;
