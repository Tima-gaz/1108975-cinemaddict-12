import {createSortTemplate} from "./view/sort.js";
import {createFilmContainerTemplate} from "./view/film-container.js";
import {createNavigationTemplate} from "./view/navigation.js";
import {createProfileTemplate} from "./view/profile.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createFooterStatTemplate} from "./view/footer-stat.js";
import {createFilmCardTemplate} from "./view/film-card.js";

const FILMS_AMOUNT = 5;
const EXTRA_FILMS_AMOUNT = 2;

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
