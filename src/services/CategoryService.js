/** @format */

import API from "../utils/API";
const BASE_URL = "api/Book";
const getList = () => {
  return API.post(`${BASE_URL}/GetListTypeBook`);
};

export const CategoryService = {
  getList,
};
