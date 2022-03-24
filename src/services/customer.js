import API from "../utils/API";
const BASE_URL = "api/Customer";
const getlist = () => {
  return API.get(`${BASE_URL}/GetListCustomer`);
};
const update = (data) => {
  return API.post(`${BASE_URL}/UpdateCustomer`,data);
};
const getDetail = (id) => {
  return API.post(`${BASE_URL}/GetDetailCustomer?id=${id}`)
}
export const customer = {
  getlist,
  update,
  getDetail
};
