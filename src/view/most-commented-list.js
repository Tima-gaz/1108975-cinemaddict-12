import AbstractView from "./abstract.js";

const createFilmContainerTemplate = () => {
  return (
    `<section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
    </section>`
  );
};

export default class MostCommentedListContainer extends AbstractView {
  getTemplate() {
    return createFilmContainerTemplate();
  }
}
