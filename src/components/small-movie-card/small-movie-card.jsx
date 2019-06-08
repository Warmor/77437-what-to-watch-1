import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "~/components/video-player/video-player";

function SmallMovieCard(props) {
  let {film, isActive, setActiveFilm, removeActiveFilm} = props;
  let timeOut = null;
  const mouseEnterHandler = () => {
    timeOut = setTimeout(() => {
      setActiveFilm();
      clearTimeout(timeOut);
    }, 1000);
  };
  const mouseLeaveHandler = () => {
    removeActiveFilm();
    clearTimeout(timeOut);
  };
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <div className="small-movie-card__image">
        { isActive && <VideoPlayer src={film.previewVideoLink} poster={film.previewImage} muted/> }
        { isActive || <img src={film.previewImage} alt={film.name} width="280" height="175"/> }
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  );
}

SmallMovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActiveFilm: PropTypes.func,
  removeActiveFilm: PropTypes.func,
};

export default SmallMovieCard;
