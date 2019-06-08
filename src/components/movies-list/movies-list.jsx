import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getActiveFilms} from "~/reducer/catalog/selectors";
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

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  films: getActiveFilms(state),
});

const mapDispatchToProps = () => ({});

export {MoviesList};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
