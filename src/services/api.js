const API_KEY = "9aa5bfdd291d4e3b1b83d3c70def0b7f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};


export const searchMovies = async () => {
    const response = await fetch(`${BASE_URL}search/movie?api_key=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};