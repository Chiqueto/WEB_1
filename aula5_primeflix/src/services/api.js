import axios from "axios";
//URL API: https?//api.themoviedb.org/3/movie/now_playing?api_key=93aa76a7639f42bc44baeb60f3f185d3&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
