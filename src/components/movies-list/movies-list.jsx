import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getActiveFilms} from "~/reducer/catalog/selectors";
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

function MoviesList(props) {
  const {
    films,
    activeFilm,
    setActiveFilm,
    removeActiveFilm,
  } = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return <SmallMovieCard
          key={film.id}
          film={film}
          isActive={!!(activeFilm && activeFilm.id === film.id)}
          onMouseEnterCard={() => setActiveFilm(film)}
          onMouseLeaveCard={() => removeActiveFilm(film)}
        />;
      })}
    </div>
  );
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeFilm: PropTypes.object || PropTypes.null,
  setActiveFilm: PropTypes.func,
  removeActiveFilm: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  films: getActiveFilms(state),
});

const mapDispatchToProps = () => ({});

export {MoviesList};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
