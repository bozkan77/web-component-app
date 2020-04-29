// let movies = [
//   {
//     title: 'The Man From Earth 1',
//     description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit',
//     poster:
//       'https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth-252x364.jpg',
//     isFavourite: true,
//   },
//   {
//     title: 'The Man From Earth 2',
//     description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit',
//     poster:
//       'https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth-252x364.jpg',
//     isFavourite: false,
//   },
//   {
//     title: 'The Man From Earth 3',
//     description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit',
//     poster:
//       'https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth-252x364.jpg',
//     isFavourite: false,
//   },
// ];

// prepareMovies(movies);

const searchText = document.querySelector('.search_text');

searchText.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    console.log(searchText.value);
    searchMovie();
  }
});

// sorgu atalım
async function searchMovie() {
  const req = await fetch(
    `http://www.omdbapi.com/?apikey=9f3ab60e&s=${searchText.value}`
  );
  const data = await req.json();

  let movies = data.Search.map((m) => {
    return {
      title: m.Title,
      description: `${m.Year} / ${m.Type}`,
      imdbID: m.imdbID,
      poster: m.Poster === 'N/A' ? '/assets/img/default.png' : m.Poster,
      isFavourite: false,
    };
  });

  console.log('movies: ', movies);
  prepareMovies(movies);
}

// filmleri hazırla

const prepareMovies = (movies) => {
  document.querySelector('#movies').innerHTML = '';
  movies.map((movie) => {
    let movie_card = document.createElement('movie-card');
    movie_card.setAttribute('title', movie.title);
    movie_card.setAttribute('poster', movie.poster);
    movie_card.setAttribute('isFavourite', movie.isFavourite);
    movie_card.setAttribute('imdbID', movie.imdbID);
    movie_card.innerHTML = movie.description;
    document.querySelector('#movies').append(movie_card);
  });
};
