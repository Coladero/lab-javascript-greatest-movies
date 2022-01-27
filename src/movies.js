// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
   return movies.map(movie => movie.director)
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const howMan = movies.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  )
  return howMan.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if(movies.length === 0){
      return 0;
    }


    const allScores = movies.reduce((acc, movies1)=>{
        if(movies1.score){
          return acc + movies1.score;
        }
        return acc;
    },0)
    const average = allScores / movies.length;
    return parseFloat(average.toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    const filteMovies = movies.filter((movie) =>{ 
      return movie.genre == 'Drama' && typeof movie.score == 'number'
   } );
    if (filteMovies.length === 0) {
      return 0;
    } else {
      const total = filteMovies.reduce((acc, value) => {
        return acc + value.score;
      }, 0);
      const averageScore = total / filteMovies.length;
      return Number(averageScore.toFixed(2));
    }
  }
  }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const arrayCopy = [...movies];
  return arrayCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      const firstMovieTitle = a.title.toLowerCase();
      const secondMovieTitle = b.title.toLowerCase();
      if (firstMovieTitle > secondMovieTitle) {
        return 1;
      } else if (firstMovieTitle < secondMovieTitle) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const durationMovies = orderArr.map((movie)=> movie.title);
  const orderMovies = durationMovies.sort((movie1, movie2)=>{
    if (movie1.year > movie2.year){
      return 1
    }else if (movie1.year < movie2.year){
      return -1
    } else {
      return 0
    }
    return orderMovies
  },)
  
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}






