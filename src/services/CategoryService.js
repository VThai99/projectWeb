/** @format */

import API from "../utils/API";
const BASE_URL = "api/Book";
const getList = () => {
  return API.post(`${BASE_URL}/GetListBookAuthor`);
};

export const Category = {
  getList,
};
