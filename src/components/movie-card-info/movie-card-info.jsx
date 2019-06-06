import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function MovieCardInfo(props) {
  const {
    withPoser = false,
  } = props;
  return <>
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        {withPoser && (
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
          </div>
        )}
        <div className="movie-card__desc">
          <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">Drama</span>
            <span className="movie-card__year">2014</span>
          </p>
          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"/>
              </svg>
              <span>My list</span>
            </button>
            <Link to="/my-list" className="btn movie-card__button">My list</Link>
            <a href="add-review.html" className="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>
  </>;
}
MovieCardInfo.propTypes = {
  withPoser: PropTypes.bool
};

export default MovieCardInfo;
