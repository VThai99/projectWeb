import API from "../utils/API";
const BASE_URL = "api/Sale";
const createOrder = (data) => {
  return API.post(`${BASE_URL}/CreateSaleOrder`, data);
};
const getAllPromotion = () =>{
  return API.get("api/Promotion/GetListPromotion")
}
const getOrder= (id) =>{
  return API.post(`${BASE_URL}/GetSaleForCustomer?customerId=${id}`)
}
export const cart = {
  createOrder,
  getAllPromotion,
  getOrder
};
