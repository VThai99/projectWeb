/** @format */

import API from "../utils/API";
const BASE_URL = "api/Book";
const getDetail = (id) => {
  return API.post(`${BASE_URL}/GetDetailBook?id=${id}`);
};

export const ProductDetailService = {
    getDetail,
};
