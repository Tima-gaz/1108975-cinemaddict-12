import SortView from "./view/sort.js";
import FilmContainerView from "./view/film-container.js";
import NavigationView from "./view/navigation.js";
import ProfileView from "./view/profile.js";
import ShowMoreButtonView from "./view/show-more-button.js";
import FooterStatView from "./view/footer-stat.js";
import FilmCardView from "./view/film-card.js";
import {generateFilm} from "./mock/film-card.js";
import PopupView from "./view/popup.js";
import {generateFilterMenu} from "./mock/filter.js";
import {render, RenderPosition} from "./utils.js";

const FILMS_AMOUNT = 15;
const FILMS_AMOUNT_PER_STEP = 5;
const EXTRA_FILMS_AMOUNT = 2;

const films = new Array(FILMS_AMOUNT).fill().map(generateFilm);
const filterMocks = generateFilterMenu();

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, new ProfileView().getElement(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, new NavigationView(filterMocks).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SortView().getElement(), RenderPosition.BEFOREEND);

const filmContainerComponent = new FilmContainerView();
render(siteMainElement, filmContainerComponent.getElement(), RenderPosition.BEFOREEND);

const filmContainerElement = siteMainElement.querySelector(`.films-list`);
const topRatedContainerElement = siteMainElement.querySelector(`.films-list--extra`);
const mostCommentedContainerElement = siteMainElement.querySelector(`.films-list--extra:last-child`);

const filmListContainerElement = filmContainerComponent.getElement().querySelector(`.films-list__container`);
const topListContainerElement = topRatedContainerElement.querySelector(`.films-list__container`);
const mostCommentedListContainerElement = mostCommentedContainerElement.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, FILMS_AMOUNT_PER_STEP); i++) {
  render(filmListContainerElement, new FilmCardView(films[i]).getElement(), RenderPosition.BEFOREEND);
}

for (let i = 0; i < EXTRA_FILMS_AMOUNT; i++) {
  render(topListContainerElement, new FilmCardView(films[i]).getElement(), RenderPosition.BEFOREEND);
}

for (let i = 0; i < EXTRA_FILMS_AMOUNT; i++) {
  render(mostCommentedListContainerElement, new FilmCardView(films[i]).getElement(), RenderPosition.BEFOREEND);
}

const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, new FooterStatView().getElement(), RenderPosition.BEFOREEND);

const renderPopup = (index) => {
  const popupComponent = new PopupView(films[index]);
  render(siteFooterElement, popupComponent.getElement(), RenderPosition.AFTEREND);
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
  const showMoreButton = new ShowMoreButtonView();
  render(filmContainerElement, showMoreButton.getElement(), RenderPosition.BEFOREEND);
  showMoreButton.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmsAmount, renderedFilmsAmount + FILMS_AMOUNT_PER_STEP)
      .forEach((film) => render(filmListContainerElement, new FilmCardView(film).getElement(), RenderPosition.BEFOREEND));
    renderedFilmsAmount += FILMS_AMOUNT_PER_STEP;
    if (renderedFilmsAmount >= films.length) {
      showMoreButton.getElement().remove();
      showMoreButton.removeElement();
    }
  });
}
