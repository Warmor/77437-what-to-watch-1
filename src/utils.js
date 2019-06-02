export const adapterFilms = (films) => {
  return films.map((film) => ({
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
    released: film.released,
    runTime: film.run_time,
    scoresCount: film.scores_count,
    starring: film.starring,
    videoLink: film.video_link,
  }));
};

export const adapterGenres = (genres) => {
  return Array.from(new Set(genres.map((film) => film.genre)));
};

