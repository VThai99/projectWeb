import API from "../utils/API";
const BASE_URL = "api/Comment";
const createComment = (data) => {
  return API.post(`${BASE_URL}/CreateComment`, data);
};
const updateComment = (data) => {
  return API.post(`${BASE_URL}/UpdateComment`, data);
};

const deleteComment = (id) => {
  return API.post(`${BASE_URL}/DeleteComment?id=${id}`);
};

const getComment = () => {
  return API.post(`${BASE_URL}/GetListComment`);
};

export const commentService = {
  createComment,
  updateComment,
  deleteComment,
  getComment
};
