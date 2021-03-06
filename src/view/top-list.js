import AbstractView from "./abstract.js";

const createFilmContainerTemplate = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
    </section>`
  );
};

export default class topListContainer extends AbstractView {
  getTemplate() {
    return createFilmContainerTemplate();
  }
}
