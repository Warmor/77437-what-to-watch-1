import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmById, getLikeThisFilmsById} from "~/reducer/films/selectors";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import MovieCardInfo from "~/components/movie-card-info/movie-card-info";
import MovieCardFull from "~/components/movie-card-full/movie-card-full";
import MoviesList from "~/components/movies-list/movies-list";

class PageFilm extends React.PureComponent {
  render() {
    return <>
      <div className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={this.props.film && this.props.film.backgroundImage} alt={this.props.film && this.props.film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header withAuth/>
          <MovieCardInfo film={this.props.film}/>
        </div>
        <MovieCardFull film={this.props.film}/>

      </div>
      <div className="page-content">
        {this.props.likeThisFilms.length > 0 && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList films={this.props.likeThisFilms}/>
          </section>
        )}
        <Footer/>
      </div>
    </>;
  }
}
PageFilm.propTypes = {
  film: PropTypes.object.isRequired,
  likeThisFilms: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  film: getFilmById(state, ownProps.match.params.id),
  likeThisFilms: getLikeThisFilmsById(state, ownProps.match.params.id)
});

export {PageFilm};

export default connect(mapStateToProps)(PageFilm);
