import AbstractView from "./abstract.js";

const createFilmCardTemplate = (film)=> {
  const {title, rating, genre, commentsAmount, description, duration, year, poster} = film;
  return (
    `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${commentsAmount} comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched  film-card__controls-item--active">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`
  );
};


export default class FilmCard extends AbstractView {
  constructor(card) {
    super();
    this._card = card;
    this._clickCallHandler = this._clickCallHandler.bind(this);
  }

  getTemplate() {
    return createFilmCardTemplate(this._card);
  }

  _clickCallHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickCallHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._clickCallHandler);
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._clickCallHandler);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._clickCallHandler);
  }
}
