import React from 'react';
import PropTypes from "prop-types";

function MovieCardFullOverview(props) {
  const {film} = props;
  return <div>
    <div className="movie-rating">
      <div className="movie-rating__score">{film.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{film.ratingTitle}</span>
        <span className="movie-rating__count">{film.runTime} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{film.description}</p>
      <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)}</strong></p>
    </div>
  </div>;
}
MovieCardFullOverview.propTypes = {
  film: PropTypes.object.isRequired,
};
export default MovieCardFullOverview;
