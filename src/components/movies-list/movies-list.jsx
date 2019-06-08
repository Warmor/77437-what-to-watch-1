import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '~/components/small-movie-card/small-movie-card';
import withActiveFilm from "~/hocs/with-active-film/with-active-film";
const SmallMovieCardWrap = withActiveFilm(SmallMovieCard);

function MoviesList(props) {
  const {
    films,
  } = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return <SmallMovieCardWrap
          key={film.id}
          film={film}
        />;
      })}
    </div>
  );
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
