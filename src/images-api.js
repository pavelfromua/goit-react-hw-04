import axios from "axios";

const ACCESS_KEY = "tfHVaJbNKAo8a5pmeBFxWcCCeGBNccIzWbiQVoLIVgc";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
    const response = await axios.get(`/?client_id=${ACCESS_KEY}&query=${query}&page=${page}`)

    return response.data.results;
};