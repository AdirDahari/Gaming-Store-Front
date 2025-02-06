import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { clearToken, getToken } from "../service/storeService";

const useAutoLogin = () => {
  const dispatch = useDispatch();
  return async () => {
    try {
      const token = getToken();
      if (!token) return;
      const dataFromToken = jwtDecode(token);

      dispatch(authActions.login(dataFromToken));
    } catch (err) {
      clearToken();
    }
  };
};

export default useAutoLogin;
