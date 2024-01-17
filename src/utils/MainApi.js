import { apiConfig } from "./constants";
class MainApi {
  constructor(apiConfig) {
    this._url = apiConfig.myUrl
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMe() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then((res) => this._checkResponse(res))
  }

  updateProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      })
    })
      .then((res) => this._checkResponse(res))
  }

  register({ name, email, password }) {
    console.log({ name, email, password })
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    }).then((res) => this._checkResponse(res))
  }

  authorize(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'email': data.email,
        'password': data.password
      })
    }).then((res) => this._checkResponse(res))
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then((res) => this._checkResponse(res))
  }

  saveNewMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${`https://api.nomoreparties.co`}${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `${`https://api.nomoreparties.co`}${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      })
    })
      .then((res) => this._checkResponse(res))
  }


  deleteSavedMovie(data) {
    return fetch(`${this._url}/movies/${data}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then((res) => this._checkResponse(res))
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': "application/json",
      }
    }).then(this._checkResponse)
  }
}

const mainApi = new MainApi(apiConfig)
export { mainApi }