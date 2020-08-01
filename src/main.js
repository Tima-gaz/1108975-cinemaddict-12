"use strict";

const FILMS_AMOUNT = 5;
const EXTRA_FILMS_AMOUNT = 2;

const createProfileTemplate = ()=> {
  return (
    `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`
  );
};

const createNavigationTemplate = ()=> {
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};

const createSortTemplate = ()=> {
  return (
    `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`
  );
};

const createFilmContainerTemplate = ()=> {
  return (
    `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>
  </section>`
  );
};

const createFilmCardTemplate = ()=> {
  return (
    `<article class="film-card">
          <h3 class="film-card__title">The Man with the Golden Arm</h3>
          <p class="film-card__rating">9.0</p>
          <p class="film-card__info">
            <span class="film-card__year">1955</span>
            <span class="film-card__duration">1h 59m</span>
            <span class="film-card__genre">Drama</span>
          </p>
          <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">
          <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
          <a class="film-card__comments">18 comments</a>
          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched  film-card__controls-item--active">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>`
  );
};

const createShowMoreButtonTemplate = ()=> {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

const createFooterStatTemplate = ()=> {
  return (
    `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`
  );
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createProfileTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createNavigationTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmContainerTemplate(), `beforeend`);

const filmContainerElement = siteMainElement.querySelector(`.films-list`);
const topRatedContainerElement = siteMainElement.querySelector(`.films-list--extra`);
const mostCommentedContainerElement = siteMainElement.querySelector(`.films-list--extra:last-child`);

const filmListContainerElement = filmContainerElement.querySelector(`.films-list__container`);
const topListContainerElement = topRatedContainerElement.querySelector(`.films-list__container`);
const mostCommentedListContainerElement = mostCommentedContainerElement.querySelector(`.films-list__container`);

render(filmContainerElement, createShowMoreButtonTemplate(), `beforeend`);

for (let i = 0; i < FILMS_AMOUNT; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}

for (let i = 0; i < EXTRA_FILMS_AMOUNT; i++) {
  render(topListContainerElement, createFilmCardTemplate(), `beforeend`);
}

for (let i = 0; i < EXTRA_FILMS_AMOUNT; i++) {
  render(mostCommentedListContainerElement, createFilmCardTemplate(), `beforeend`);
}

const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, createFooterStatTemplate(), `beforeend`);
