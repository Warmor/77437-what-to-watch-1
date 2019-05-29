import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';
import {connect} from "react-redux";

function CatalogMoviesList(props) {
  const {
    films,
    activeFilm,
    setActiveFilm,
    removeActiveFilm,
    onArticleTitleClick
  } = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return <SmallMovieCard
          key={film.id}
          film={film}
          isActive={!!(activeFilm && activeFilm.id === film.id)}
          onArticleTitleClick={onArticleTitleClick}
          onMouseEnterCard={() => setActiveFilm(film)}
          onMouseLeaveCard={() => removeActiveFilm(film)}
        />;
      })}
    </div>
  );
}

CatalogMoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeFilm: PropTypes.object || PropTypes.null,
  setActiveFilm: PropTypes.func,
  removeActiveFilm: PropTypes.func,
  onArticleTitleClick: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  films: state.films,
});

const mapDispatchToProps = () => ({});

export {CatalogMoviesList};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogMoviesList);
