const getRatingTitle = (rating) => {
  if (+rating === 10) {
    return `Awesome`;
  } else if (+rating >= 8 && +rating < 10) {
    return `Very good`;
  } else if (+rating >= 5 && +rating < 8) {
    return `Good`;
  } else if (+rating >= 3 && +rating < 5) {
    return `Normal`;
  } else if (+rating >= 0 && +rating < 3) {
    return `Bad`;
  }
  return `Error`;
};

export const adapterFilm = (film) => ({
  backgroundColor: film.background_color,
  backgroundImage: film.background_image,
  description: film.description,
  director: film.director,
  genre: film.genre,
  id: film.id,
  isFavorite: film.is_favorite,
  name: film.name,
  posterImage: film.poster_image,
  previewImage: film.preview_image,
  previewVideoLink: film.preview_video_link,
  rating: film.rating,
  ratingTitle: getRatingTitle(film.rating),
  released: film.released,
  runTime: film.run_time,
  scoresCount: film.scores_count,
  starring: film.starring,
  videoLink: film.video_link,
});

export const adapterFilms = (films) => {
  return films.map((film) => adapterFilm(film));
};

export const adapterGenres = (genres) => {
  return Array.from(new Set(genres.map((film) => film.genre)));
};

