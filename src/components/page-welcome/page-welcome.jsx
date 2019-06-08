import React from 'react';
import {connect} from "react-redux";
import {getActiveFilms} from "~/reducer/catalog/selectors";

import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import MoviesList from "~/components/movies-list/movies-list";
import CatalogGenresList from "~/components/catalog-genres-list/catalog-genres-list";
import MovieCardInfo from "~/components/movie-card-info/movie-card-info";
import PropTypes from "prop-types";

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
          <CatalogGenresList/>
          <MoviesList films={this.props.films}/>
        </section>
        <Footer/>
      </div>
    </>;
  }
}

PageWelcome.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  films: getActiveFilms(state),
});

const mapDispatchToProps = () => ({});

export {PageWelcome};

export default connect(mapStateToProps, mapDispatchToProps)(PageWelcome);
