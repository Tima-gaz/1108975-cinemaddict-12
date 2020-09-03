import SortView from "../view/sort.js";
import FilmContainerView from "../view/film-container.js";
import FilmListView from "../view/film-list.js";
import FilmComponentView from "../view/film-component.js";
import TopListView from "../view/top-list.js";
import MostCommentedListView from "../view/most-commented-list.js";
import ShowMoreButtonView from "../view/show-more-button.js";
import FilmCardView from "../view/film-card.js";
import PopupView from "../view/popup.js";
import FooterStatView from "../view/footer-stat.js";
import {render, RenderPosition} from "../utils/render.js";

const FILMS_AMOUNT_PER_STEP = 5;
const EXTRA_FILMS_AMOUNT = 2;

export default class MovieList {
  constructor(filmContainer, footerContainer) {
    this._filmContainer = filmContainer;
    this._footerContainer = footerContainer;
    this._filmAmount = FILMS_AMOUNT_PER_STEP;
    this._extraFilmAmount = EXTRA_FILMS_AMOUNT;

    this._filmContainerComponent = new FilmContainerView();
    this._showMoreComponent = new ShowMoreButtonView();
    this._filmListComponent = new FilmListView();
    this._topListComponent = new TopListView();
    this._mostCommentedListComponent = new MostCommentedListView();
    this._siteFooterComponent = new FooterStatView();
  }

  init(films) {
    this._films = films.slice();

    render(this._filmContainer, this._filmContainerComponent, RenderPosition.BEFOREEND);
    render(this._filmContainerComponent, this._filmListComponent, RenderPosition.BEFOREEND);
    render(this._filmContainerComponent, this._topListComponent, RenderPosition.BEFOREEND);
    render(this._filmContainerComponent, this._mostCommentedListComponent, RenderPosition.BEFOREEND);
    render(this._footerContainer, this._siteFooterComponent, RenderPosition.BEFOREEND);

    this._renderSort();
    this._renderMovieList();
  }

  _renderSort() {
    render(this._filmContainer, new SortView().getElement(), RenderPosition.BEFOREEND);
  }

  _renderPopup(filmData) {
    const popupComponent = new PopupView(filmData);
    render(this._siteFooterComponent, popupComponent, RenderPosition.AFTEREND);

    const popupElement = document.querySelector(`.film-details`);
    const closePopupComponent = () => {
      popupElement.remove();
    };

    popupComponent.setClosePopupHandler(() => {
      closePopupComponent();
    });
  }

  _renderFilm(filmData, container) {
    const filmCardComponent = new FilmCardView(filmData);
    render(container, filmCardComponent, RenderPosition.BEFOREEND);
    filmCardComponent.setClickCallHandler(() => {
      this._renderPopup(filmData);
    });
  }


  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((films) => {
        this._renderFilm(films, this._containerElement);
      });
  }

  _renderExtraFilms() {
    const fcontainerElement = new FilmComponentView();
    render(this._topListComponent, fcontainerElement, RenderPosition.BEFOREEND);
    const gcontainerElement = new FilmComponentView();
    render(this._mostCommentedListComponent, gcontainerElement, RenderPosition.BEFOREEND);

    this._films
      .slice(0, this._extraFilmAmount)
      .forEach((films) => {
        this._renderFilm(films, fcontainerElement);
        this._renderFilm(films, gcontainerElement);
      });
  }

  //  _handleShowMoreButtonClick() {

  //    this._renderFilms(this._filmAmount, this._filmAmount + FILMS_AMOUNT_PER_STEP)
  //    this._filmAmount += FILMS_AMOUNT_PER_STEP;
  //
  //    if (this._filmAmount >= this._films.length) {
  //      remove(this._showMoreComponent);
  //    }
  //  }

  _renderShowMoreButton() {
    render(this._filmListComponent, this._showMoreComponent, RenderPosition.BEFOREEND);
    this._showMoreComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _renderMovieList() {
    this._containerElement = new FilmComponentView();
    render(this._filmListComponent, this._containerElement, RenderPosition.BEFOREEND);

    this._renderFilms(0, Math.min(this._films.length, FILMS_AMOUNT_PER_STEP));
    this._renderExtraFilms();

    if (this._films.length > FILMS_AMOUNT_PER_STEP) {
      this._renderShowMoreButton();
    }
  }
}
