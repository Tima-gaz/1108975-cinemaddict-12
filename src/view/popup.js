import SmartView from "./smart.js";

const createPopupTemplate = (film) => {
  const {title, rating, genre, description, duration, year, poster, director, actors, writers, release, age, country, isFavorite, isInWatchlist, isWatched, emoji} = film;

  const favoriteClassName = isFavorite
    ? `checked`
    : ``;

  const watchedClassName = isWatched
    ? `checked`
    : ``;

  const watchlistClassName = isInWatchlist
    ? `checked`
    : ``;

  return (
    `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
    <div class="form-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${poster}" alt="">

          <p class="film-details__age">${age}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${title}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${release}${year}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                <span class="film-details__genre">${genre}</span>
                <span class="film-details__genre">Film-Noir</span>
                <span class="film-details__genre">Mystery</span></td>
            </tr>
          </table>

          <p class="film-details__film-description">
            ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden " id="watchlist" name="watchlist" ${watchlistClassName}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist ">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${watchedClassName}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched ">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${favoriteClassName}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite ">Add to favorites</label>
      </section>
    </div>

    <div class="form-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

        <ul class="film-details__comments-list">
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">Interesting setting and a good cast</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">Tim Macoveev</span>
                <span class="film-details__comment-day">2019/12/31 23:59</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
            </span>
            <div>
              <p class="film-details__comment-text">Booooooooooring</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">2 days ago</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
            </span>
            <div>
              <p class="film-details__comment-text">Very very old. Meh</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">2 days ago</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
            </span>
            <div>
              <p class="film-details__comment-text">Almost two hours? Seriously?</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">Today</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
        </ul>

        <div class="film-details__new-comment">
          <div for="add-emoji" class="film-details__add-emoji-label">${emoji}</div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`
  );
};

export default class Popup extends SmartView {
  constructor(card) {
    super();
    this._card = card;
    this._closePopupHandler = this._closePopupHandler.bind(this);
    this._descriptionInputHandler = this._descriptionInputHandler.bind(this);
    this._emojiChangeHandler = this._emojiChangeHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._setInnerHandlers();
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setClosePopupHandler(this._callback.click);
  }

  _setInnerHandlers() {
    this.getElement().querySelector(`label[for="watched"]`).addEventListener(`click`, this._watchedClickHandler);
    this.getElement().querySelector(`label[for="watchlist"]`).addEventListener(`click`, this._watchlistClickHandler);
    this.getElement().querySelector(`label[for="favorite"]`).addEventListener(`click`, this._favoriteClickHandler);
    this.getElement().querySelector(`.film-details__comment-input`).addEventListener(`input`, this._descriptionInputHandler);
    const emojis = this.getElement().querySelectorAll(`.film-details__emoji-label`);
    for (let emoji of emojis) {
      emoji.firstElementChild.addEventListener(`click`, this._emojiChangeHandler);
    }
  }

  getTemplate() {
    return createPopupTemplate(this._card);
  }

  _closePopupHandler(evt) {
    evt.preventDefault();
    this._callback.click(this._card);
  }

  setClosePopupHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._closePopupHandler);
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

  _descriptionInputHandler(evt) {
    evt.preventDefault();
    this.updateData({
      description: evt.target.value
    }, true);
  }

  _emojiChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      emoji: this._getEmoji(evt.target)
    });
  }

  _getEmoji(value) {
    let emojiElement = null;
    const EMOJI = [
      `<img src="./images/emoji/smile.png" width="55" height="55" alt="emoji">`,
      `<img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji">`,
      `<img src="./images/emoji/puke.png" width="55" height="55" alt="emoji">`,
      `<img src="./images/emoji/angry.png" width="55" height="55" alt="emoji">`
    ];
    switch (value) {
      case document.querySelector(`label[for="emoji-smile"]`).firstElementChild:
        emojiElement = EMOJI[0];
        break;
      case document.querySelector(`label[for="emoji-sleeping"]`).firstElementChild:
        emojiElement = EMOJI[1];
        break;
      case document.querySelector(`label[for="emoji-puke"]`).firstElementChild:
        emojiElement = EMOJI[2];
        break;
      case document.querySelector(`label[for="emoji-angry"]`).firstElementChild:
        emojiElement = EMOJI[3];
        break;
    }
    return emojiElement;
  }
}
