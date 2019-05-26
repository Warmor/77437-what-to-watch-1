import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "~/components/video-player/video-player";

function SmallMovieCard(props) {
  let {film, isActive, onArticleTitleClick, onMouseEnterCard, onMouseLeaveCard} = props;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnterCard()} onMouseLeave={() => onMouseLeaveCard()}>
      <div className="small-movie-card__image">
        { isActive && <VideoPlayer film={film} muted/> }
        { isActive || <img src={film.image} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/> }
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onArticleTitleClick}>{film.title}</a>
      </h3>
    </article>
  );
}

SmallMovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onArticleTitleClick: PropTypes.func,
  onMouseEnterCard: PropTypes.func,
  onMouseLeaveCard: PropTypes.func,
};

export default SmallMovieCard;
