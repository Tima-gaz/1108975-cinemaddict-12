import AbstractView from "./abstract.js";

const createNavigationTemplate = (filterMock)=> {
  const {historyAmount, favouritesAmount, watchlistAmount} = filterMock;
  return (
    `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlistAmount}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${historyAmount}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favouritesAmount}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};

export default class Navigation extends AbstractView {
  constructor(nav) {
    super();
    this._nav = nav;
  }

  getTemplate() {
    return createNavigationTemplate(this._nav);
  }
}
