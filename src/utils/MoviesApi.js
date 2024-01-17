import { apiConfig } from "./constants"
class MoviesApi {
    constructor(apiConfig) {
        this._url = apiConfig.BeatFilmUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._url}`, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => this._checkResponse(res))
    }
}

const moviesApi = new MoviesApi(apiConfig);
export { moviesApi }