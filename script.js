'use strict'

/* VARIABLES */

let numberOfFilms;
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

/* FUNCTIONS */

function start() { // Ask how many films you have seen
  numberOfFilms = +prompt("How many movies did you watch?", "");
  while (isNaN(numberOfFilms) || numberOfFilms <=0 || numberOfFilms == null || numberOfFilms == '') {
    numberOfFilms = +prompt("How many movies did you watch?", "")
  }
}

function showMyDB(hidden) { // Show the object in console if not privat
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres(genResArray) { //Ask for 3 favorite genres
  for (let i = 1; i <= 3; i++) {
    genResArray.push(prompt(`Write you favorite genres N.${i}`));
  }
  return 0;
}

function rememberMyFilms() { // Ask to rate the films
  for (let i = 0; i < 2; i++) {
    let filmName = prompt("Last film you have seen?", ""),
        filmRating = prompt("Please, rate this film up to 10 points:");
    
    if (filmName != null && filmRating != null && filmName.length < 50 && filmRating !='' && filmName != '') {
      personalMovieDB.movies[filmName] = filmRating;
    }
  }
}

function detectPersonalLevel() { //Rate the amount of the film you have recently seen
  if (numberOfFilms < 10) {
    console.log("You saw a little films");
  } else if (numberOfFilms <= 30) {
    console.log("You are normal viewer");
  } else if (numberOfFilms > 30) {
    console.log("You are a movieholic");
  } else {
    console.log("You are a movieholic");
  }
}

/* MAIN PROGRAM */
start();
writeYourGenres(personalMovieDB.genres);
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);


