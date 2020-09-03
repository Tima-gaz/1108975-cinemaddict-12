import AbstractView from "./abstract.js";

const createFilmContainerTemplate = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    </section>`
  );
};

export default class FilmContainer extends AbstractView {
  getTemplate() {
    return createFilmContainerTemplate();
  }
}
