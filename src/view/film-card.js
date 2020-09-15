import SmartView from "./smart.js";

const createFilmCardTemplate = (film)=> {
  const {title, rating, genre, commentsAmount, description, duration, year, poster, isFavorite, isInWatchlist, isWatched} = film;

  const favoriteClassName = isFavorite
    ? `film-card__controls-item--active`
    : ``;

  const watchedClassName = isWatched
    ? `film-card__controls-item--active`
    : ``;

  const watchlistClassName = isInWatchlist
    ? `film-card__controls-item--active`
    : ``;

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
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistClassName} ">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched  ${watchedClassName}">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}">Mark as favorite</button>
          </form>
        </article>`
  );
};


export default class FilmCard extends SmartView {
  constructor(card) {
    super();
    this._card = card;
    this._clickCallHandler = this._clickCallHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._setInnerHandlers();
  }

  getTemplate() {
    return createFilmCardTemplate(this._card);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setClickCallHandler(this._callback.click);
  }

  _setInnerHandlers() {
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchlistClickHandler);
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  _clickCallHandler(evt) {
    evt.preventDefault();
    this._callback.click(this._card);
  }

  setClickCallHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._clickCallHandler);
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._clickCallHandler);
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._clickCallHandler);
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this.updateData({
      isWatched: !this._card.isWatched
    });
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this.updateData({
      isInWatchlist: !this._card.isInWatchlist
    });
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this.updateData({
      isFavorite: !this._card.isFavorite
    });
  }
}
