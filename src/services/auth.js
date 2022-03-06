import API from "../utils/API";
const BASE_URL = "api/Auth";
const login = (data) => {
  return API.post(`${BASE_URL}/SignInCustomer`,data);
};
const signup = (data) => {
  return API.post(`${BASE_URL}/SignUpCustomer`,data);
};
export const auth = {
  login,
  signup,
};
