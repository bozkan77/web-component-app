let movies = [
  {
    title: 'The Man From Earth 1',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit',
    poster:
      'https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth-252x364.jpg',
    isFavourite: true,
  },
  {
    title: 'The Man From Earth 2',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit',
    poster:
      'https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth-252x364.jpg',
    isFavourite: false,
  },
  {
    title: 'The Man From Earth 3',
    description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit',
    poster:
      'https://unutulmazfilmler.pw/wp-content/uploads/2016/07/The-Man-from-Earth-252x364.jpg',
    isFavourite: false,
  },
];

// filmleri hazırla

const prepareMovies = (movies) => {
  movies.map((movie) => {
    let movie_card = document.createElement('movie-card');
    movie_card.setAttribute('title', movie.title);
    movie_card.setAttribute('poster', movie.poster);
    movie_card.setAttribute('isFavourite', movie.isFavourite);
    movie_card.innerHTML = movie.description;
    document.querySelector('#movies').append(movie_card);
  });
};

prepareMovies(movies);
