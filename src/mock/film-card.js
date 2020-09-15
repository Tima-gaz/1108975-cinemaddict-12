import {getRandomInteger} from "../utils/common.js";

const MAX_RATING = 9;
const BEGINNING_OF_CINEMA = 1920;
const CURRENT_YEAR = 2020;

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const mockText = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const randomPeopleList = [
  `Peter Dinklage`,
  `Lena Headey`,
  `Emilia Clarke`,
  `Kit Harington`,
  `Sophie Turner`,
  `Maisie Williams`,
  `Nikolaj Coster-Waldau`,
  `Iain Glen`,
  `John Bradley`,
  `Alfie Allen`
];

const generateCountry = () => {
  const countries = [
    `USA`,
    `France`,
    `Canada`,
    `India`,
    `UK`,
    `Germany`,
    `Russia`,
    `Brazil`
  ];
  const randomIndex = getRandomInteger(0, countries.length - 1);
  return countries[randomIndex];
};

const generateAge = () => {
  const ages = [
    `0+`,
    `6+`,
    `12+`,
    `16+`,
    `18+`
  ];
  const randomIndex = getRandomInteger(0, ages.length - 1);
  return ages[randomIndex];
};

const generateTitle = () => {
  const titles = [
    `Avengers`,
    `Last Stand`,
    `Knocking on heaven's door`,
    `Leon`,
    `Green Mile`,
    `It`,
    `Theory of Everything`,
    `How to Train Your Dragon`,
    `The Shining`,
    `The Godfather`
  ];
  const randomIndex = getRandomInteger(0, titles.length - 1);
  return titles[randomIndex];
};

const getGenre = () => {
  const genres = [
    `Drama`,
    `Sci-Fi`,
    `Western`,
    `Musical`,
    `Comedy`,
    `Cartoon`,
    `Thriller`,
    `Action`
  ];
  const randomIndex = getRandomInteger(0, genres.length - 1);
  return genres[randomIndex];
};

const generateDescription = () => {
  const randomAmount = getRandomInteger(1, 5);
  let arr = [];
  for (let i = 0; i < randomAmount; i++) {
    let randomIndex = getRandomInteger(0, mockText.length - 1);
    arr.push(mockText[randomIndex]);
  }
  let description = arr.reduce((text, mock) => {
    let message = text + mock;
    return message;
  });
  return description;
};

const generateReleaseDate = () => {
  const months = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
  ];
  const randomMonth = getRandomInteger(1, 12);
  const date = getRandomInteger(1, 29) + ` ` + months[randomMonth];
  return date;
};

const generatePoster = () => {
  const posters = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`
  ];
  const randomPoster = getRandomInteger(0, posters.length - 1);
  return `./images/posters/${posters[randomPoster]}`;
};

const generateDirector = () => {
  const randomIndex = getRandomInteger(0, randomPeopleList.length - 1);
  return randomPeopleList[randomIndex];
};

const generateWriters = () => {
  const randomAmount = getRandomInteger(2, 4);
  let arr = [];
  for (let i = 0; i < randomAmount; i++) {
    let randomIndex = getRandomInteger(0, randomPeopleList.length - 1);
    arr.push(randomPeopleList[randomIndex]);
  }
  let description = arr.reduce((text, mock) => {
    let message = text + `, ` + mock;
    return message;
  });
  return description;
};

const generateActors = () => {
  const randomAmount = getRandomInteger(2, 4);
  let arr = [];
  for (let i = 0; i < randomAmount; i++) {
    let randomIndex = getRandomInteger(0, randomPeopleList.length - 1);
    arr.push(randomPeopleList[randomIndex]);
  }
  let description = arr.reduce((text, mock) => {
    let message = text + `, ` + mock;
    return message;
  });
  return description;
};

export const generateFilm = () => {
  return {
    id: generateId(),
    title: generateTitle(),
    originalTitle: generateTitle(),
    poster: generatePoster(),
    description: generateDescription(),
    commentsAmount: getRandomInteger(0, 5),
    duration: ` ${getRandomInteger(1, 3)}h ${getRandomInteger(0, 60)}m`,
    rating: getRandomInteger(0, MAX_RATING) + `.` + getRandomInteger(0, MAX_RATING),
    year: getRandomInteger(BEGINNING_OF_CINEMA, CURRENT_YEAR),
    release: generateReleaseDate() + ` `,
    genre: getGenre(),
    director: generateDirector(),
    writers: generateWriters(),
    actors: generateActors(),
    country: generateCountry(),
    age: generateAge(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isInWatchlist: Boolean(getRandomInteger(0, 1)),
    isWatched: Boolean(getRandomInteger(0, 1)),
    emoji: ``
  };
};
