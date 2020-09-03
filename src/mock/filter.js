import {getRandomInteger} from "../utils/common.js";

const WATCHLIST = 25;
const HISTORY = 10;
const FAVOURITES = 15;

export const generateFilterMenu = () => {
  return {
    watchlistAmount: getRandomInteger(1, WATCHLIST),
    historyAmount: getRandomInteger(1, HISTORY),
    favouritesAmount: getRandomInteger(1, FAVOURITES)
  };
};
