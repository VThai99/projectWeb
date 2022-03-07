import API from "../utils/API";
const BASE_URL = "api/Book";
const getListBook = () =>{
    return API.get(`${BASE_URL}/GetListBook`)
}
export const home = {
    getListBook
}