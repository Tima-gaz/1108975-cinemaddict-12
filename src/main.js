import {createSortTemplate} from "./view/sort.js";
import {createFilmContainerTemplate} from "./view/film-container.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createProfileTemplate} from "./view/profile.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createFooterStatTemplate} from "./view/footer-stat.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {generateFilm} from "./mock/film-card.js";
import {createPopupTemplate} from "./view/popup.js";
import {generateFilterMenu} from "./mock/filter.js";

const FILMS_AMOUNT = 15;
const FILMS_AMOUNT_PER_STEP = 5;
const EXTRA_FILMS_AMOUNT = 2;

const films = new Array(FILMS_AMOUNT).fill().map(generateFilm);
const filterMocks = generateFilterMenu();

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createProfileTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createNavigationTemplate(filterMocks), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmContainerTemplate(), `beforeend`);

const filmContainerElement = siteMainElement.querySelector(`.films-list`);
const topRatedContainerElement = siteMainElement.querySelector(`.films-list--extra`);
const mostCommentedContainerElement = siteMainElement.querySelector(`.films-list--extra:last-child`);

const filmListContainerElement = filmContainerElement.querySelector(`.films-list__container`);
const topListContainerElement = topRatedContainerElement.querySelector(`.films-list__container`);
const mostCommentedListContainerElement = mostCommentedContainerElement.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, FILMS_AMOUNT_PER_STEP); i++) {
  render(filmListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
}

for (let i = 0; i < EXTRA_FILMS_AMOUNT; i++) {
  render(topListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
}

for (let i = 0; i < EXTRA_FILMS_AMOUNT; i++) {
  render(mostCommentedListContainerElement, createFilmCardTemplate(films[i]), `beforeend`);
}

const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, createFooterStatTemplate(), `beforeend`);

const renderPopup = (index) => {
  render(siteFooterElement, createPopupTemplate(films[index]), `afterend`);
  const popupElement = document.querySelector(`.film-details`);
  const popupCloseButton = popupElement.querySelector(`.film-details__close-btn`);
  popupCloseButton.addEventListener(`click`, () => {
    popupElement.remove();
  });
};

const filmCardElements = filmListContainerElement.querySelectorAll(`.film-card`);
for (let i = 0; i < filmCardElements.length; i++) {
  const filmCardElement = filmCardElements[i];
  const filmPoster = filmCardElement.querySelector(`.film-card__poster`);
  const filmTitle = filmCardElement.querySelector(`.film-card__title`);
  const filmComments = filmCardElement.querySelector(`.film-card__comments`);
  filmComments.addEventListener(`click`, () => {
    renderPopup(i);
  });
  filmTitle.addEventListener(`click`, () => {
    renderPopup(i);
  });
  filmPoster.addEventListener(`click`, () => {
    renderPopup(i);
  });
}

if (films.length > FILMS_AMOUNT_PER_STEP) {
  let renderedFilmsAmount = FILMS_AMOUNT_PER_STEP;
  render(filmContainerElement, createShowMoreButtonTemplate(), `beforeend`);
  const showMoreButton = filmContainerElement.querySelector(`.films-list__show-more`);
  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmsAmount, renderedFilmsAmount + FILMS_AMOUNT_PER_STEP)
      .forEach((film) => render(filmListContainerElement, createFilmCardTemplate(film), `beforeend`));
    renderedFilmsAmount += FILMS_AMOUNT_PER_STEP;
    if (renderedFilmsAmount >= films.length) {
      showMoreButton.remove();
    }
  });
}
