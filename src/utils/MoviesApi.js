import { API_CONFIG } from "./constants"
class MoviesApi {
    constructor(API_CONFIG) {
        this._url = API_CONFIG.BeatFilmUrl;
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

const moviesApi = new MoviesApi(API_CONFIG);
export { moviesApi }