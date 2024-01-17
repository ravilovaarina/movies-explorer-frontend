
const apiConfig = {
    myUrl: 'https://api.moviesexplorer.nomoredomainsmonster.ru',
    BeatFilmUrl: 'https://api.nomoreparties.co/beatfilm-movies',
}

const deviceWidth = {
    desktop: {
      width:  800,
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

export {apiConfig, deviceWidth}