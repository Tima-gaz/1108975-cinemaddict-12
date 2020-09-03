import NavigationView from "./view/navigation.js";
import ProfileView from "./view/profile.js";
import {generateFilm} from "./mock/film-card.js";
import {generateFilterMenu} from "./mock/filter.js";
import {render, RenderPosition} from "./utils/render.js";
import MovieListPresenter from "./presenter/movie-list.js";

const FILMS_AMOUNT = 15;

const films = new Array(FILMS_AMOUNT).fill().map(generateFilm);
const filterMocks = generateFilterMenu();

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, new ProfileView().getElement(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, new NavigationView(filterMocks).getElement(), RenderPosition.BEFOREEND);
const siteFooterElement = document.querySelector(`.footer`);

const movieListPresenter = new MovieListPresenter(siteMainElement, siteFooterElement);

movieListPresenter.init(films);
