import {getRandomInteger} from "../utils.js";

export const createFooterStatTemplate = ()=> {
  const randomStat = getRandomInteger(10000, 300000);
  return (
    `<section class="footer__statistics">
    <p>${randomStat} movies inside</p>
  </section>`
  );
};
