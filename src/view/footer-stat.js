import AbstractView from "./abstract.js";
import {getRandomInteger} from "../utils/common.js";

export const createFooterStatTemplate = ()=> {
  const randomStat = getRandomInteger(10000, 300000);
  return (
    `<section class="footer__statistics">
    <p>${randomStat} movies inside</p>
  </section>`
  );
};

export default class FooterStat extends AbstractView {
  getTemplate() {
    return createFooterStatTemplate();
  }
}
