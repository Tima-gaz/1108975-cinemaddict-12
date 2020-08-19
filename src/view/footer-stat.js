import {getRandomInteger, createElement} from "../utils.js";

export const createFooterStatTemplate = ()=> {
  const randomStat = getRandomInteger(10000, 300000);
  return (
    `<section class="footer__statistics">
    <p>${randomStat} movies inside</p>
  </section>`
  );
};

export default class FooterStat {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterStatTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
