import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getFavoriteIdList} from "~/reducer/favorite/selectors";
import {Operation as OperationFavorite} from "~/reducer/favorite/favorite";

function MovieCardInfo(props) {
  const {
    withPoser = false,
    film,
    addFavorite,
    removeFavorite,
    favoriteIdList = [],
  } = props;
  const isFavorite = favoriteIdList.includes(film.id);
  return <>
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        {withPoser && (
          <div className="movie-card__poster">
            <img src={film.posterImage} alt={film.name} width="218" height="327"/>
          </div>
        )}
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{film.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{film.genre}</span>
            <span className="movie-card__year">{film.released}</span>
          </p>
          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
            {isFavorite && (
              <button className="btn btn--list movie-card__button" type="button" onClick={() => removeFavorite(film.id)}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#in-list"/>
                </svg>
                <span>My list</span>
              </button>
            )}
            {!isFavorite && (
              <button className="btn btn--list movie-card__button" type="button" onClick={() => addFavorite(film.id)}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
            )}
            <Link to={`/film/${film.id}/review`} className="btn movie-card__button">Add review</Link>
          </div>
        </div>
      </div>
    </div>
  </>;
}
MovieCardInfo.propTypes = {
  withPoser: PropTypes.bool,
  film: PropTypes.object.isRequired,
  favoriteIdList: PropTypes.array.isRequired,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  favoriteIdList: getFavoriteIdList(state)
});
const mapDispatchToProps = (dispatch) => ({
  addFavorite: (filmId) => dispatch(OperationFavorite.addFavorite(filmId)),
  removeFavorite: (filmId) => dispatch(OperationFavorite.removeFavorite(filmId)),
});


export {MovieCardInfo};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardInfo);
