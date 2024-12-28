var numberOfFilms = +prompt("How many movies did you watch?", "");

var personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

var q1 = prompt("Last film you have seen?", ""),
    a1 = +prompt("Please, rate this film up to 10 points:", "0");
    q2 = prompt("Last film you have seen?", ""),
    a2 = +prompt("Please, rate this film up to 10 points:", "0");

personalMovieDB.movies[q1] = a1;
personalMovieDB.movies[q2] = a2;

console.log(personalMovieDB);r 