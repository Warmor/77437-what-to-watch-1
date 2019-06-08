import React from 'react';
import {connect} from "react-redux";
import {getActiveFilms, getActiveGenre} from "~/reducer/catalog/selectors";

import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import MoviesList from "~/components/movies-list/movies-list";
import GenresList from "~/components/genres-list/genres-list";
import MovieCardInfo from "~/components/movie-card-info/movie-card-info";
import PropTypes from "prop-types";
import {getGenres} from "~/reducer/data/selectors";
import {ActionCreator} from "~/reducer/catalog/catalog";

class PageWelcome extends React.PureComponent {
  render() {
    return <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header withAuth/>
        <MovieCardInfo withPoser/>
      </section>
      <div className="page-content">
        <section className="catalog">
          <GenresList
            genres={this.props.genres}
            activeGenre={this.props.activeGenre}
            onGenreLinkClick={this.props.setActiveGenre}/>
          <MoviesList films={this.props.films}/>
        </section>
        <Footer/>
      </div>
    </>;
  }
}

PageWelcome.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  setActiveGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  films: getActiveFilms(state),
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveGenre: (genre) => dispatch(ActionCreator.setActiveGenre(genre))
});

export {PageWelcome};

export default connect(mapStateToProps, mapDispatchToProps)(PageWelcome);
