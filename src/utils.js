export const adapterFilms = (films) => {
  return films;
};

export const adapterGenres = (genres) => {
  return Array.from(new Set(genres.map((film) => film.genre)));
};

