import React from 'react';
import PropTypes from 'prop-types';

export default function SmallMovieCard(props) {
  let {film, onPlayBtnClick, onArticleTitleClick} = props;
  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button" onClick={onPlayBtnClick}>Play</button>
      <div className="small-movie-card__image">
        <img src={film.image} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onArticleTitleClick}>{film.title}</a>
      </h3>
    </article>
  );
}

SmallMovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  onArticleTitleClick: PropTypes.func,
  onPlayBtnClick: PropTypes.func,
};
