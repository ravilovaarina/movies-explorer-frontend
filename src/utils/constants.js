
const API_CONFIG = {
  myUrl: 'https://api.moviesexplorer.nomoredomainsmonster.ru',
  BeatFilmUrl: 'https://api.nomoreparties.co/beatfilm-movies',
}

const DEVICE_WIDTH = {
  desktop: {
    width: 1280,
    cards: {
      total: 12,
      more: 3,
    },
  },
  tablet: {
    width: 400,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 400,
    cards: {
      total: 5,
      more: 2,
    },
  },
};

const REG_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SHORT_MOVIE_DURATION = 40

export { API_CONFIG, DEVICE_WIDTH, REG_EMAIL, SHORT_MOVIE_DURATION }