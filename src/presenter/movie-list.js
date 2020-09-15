import FilmContainerView from "../view/film-container.js";
import FilmListView from "../view/film-list.js";
import FilmComponentView from "../view/film-component.js";
import TopListView from "../view/top-list.js";
import MostCommentedListView from "../view/most-commented-list.js";
import ShowMoreButtonView from "../view/show-more-button.js";
import FilmCardPresenter from "./film-card.js";
import FooterStatView from "../view/footer-stat.js";
import {render, RenderPosition, remove} from "../utils/render.js";
import {updateItem} from "../utils/common.js";

const FILMS_AMOUNT_PER_STEP = 5;
const EXTRA_FILMS_AMOUNT = 2;

export default class MovieList {
  constructor(filmContainer, footerContainer) {
    this._filmContainer = filmContainer;
    this._footerContainer = footerContainer;
    this._filmAmount = FILMS_AMOUNT_PER_STEP;
    this._extraFilmAmount = EXTRA_FILMS_AMOUNT;
    this._filmCardPresenter = {};

    this._filmContainerComponent = new FilmContainerView();
    this._showMoreComponent = new ShowMoreButtonView();
    this._filmListComponent = new FilmListView();
    this._topListComponent = new TopListView();
    this._mostCommentedListComponent = new MostCommentedListView();
    this._siteFooterComponent = new FooterStatView();

    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleFilmDataChange = this._handleFilmDataChange.bind(this);
  }

  init(films) {
    this._films = films.slice();

    render(this._filmContainer, this._filmContainerComponent, RenderPosition.BEFOREEND);
    render(this._filmContainerComponent, this._filmListComponent, RenderPosition.BEFOREEND);
    render(this._filmContainerComponent, this._topListComponent, RenderPosition.BEFOREEND);
    render(this._filmContainerComponent, this._mostCommentedListComponent, RenderPosition.BEFOREEND);
    render(this._footerContainer, this._siteFooterComponent, RenderPosition.BEFOREEND);

    this._renderMovieList();
  }

  _handleFilmDataChange(updated) {
    this._films = updateItem(this._films, updated);
    this._filmCardPresenter[updated.id].init(updated);
  }

  _renderFilm(filmData, container) {
    const filmCardPresenter = new FilmCardPresenter(container, this._siteFooterComponent, this._handleFilmDataChange);
    filmCardPresenter.init(filmData);
    this._filmCardPresenter[filmData.id] = filmCardPresenter;
  }

  _renderFilms(from, to) {
    this._films
      .slice(from, to)
      .forEach((films) => {
        this._renderFilm(films, this._containerElement);
      });
  }

  _renderExtraFilms() {
    const topContainerElement = new FilmComponentView();
    render(this._topListComponent, topContainerElement, RenderPosition.BEFOREEND);
    const mostContainerElement = new FilmComponentView();
    render(this._mostCommentedListComponent, mostContainerElement, RenderPosition.BEFOREEND);

    this._films
      .slice(0, this._extraFilmAmount)
      .forEach((films) => {
        this._renderFilm(films, topContainerElement);
        this._renderFilm(films, mostContainerElement);
      });
  }

  _clearFilmList() {
    Object
      .values(this._filmCardPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmCardPresenter = {};
    this._filmAmount = FILMS_AMOUNT_PER_STEP;
  }

  _handleShowMoreButtonClick() {
    this._renderFilms(this._filmAmount, this._filmAmount + FILMS_AMOUNT_PER_STEP);
    this._filmAmount += FILMS_AMOUNT_PER_STEP;

    if (this._filmAmount >= this._films.length) {
      remove(this._showMoreComponent);
    }
  }

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
