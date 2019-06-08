import React from 'react';
import MoviesList from "~/components/movies-list/movies-list";
import CatalogGenresList from "~/components/catalog-genres-list/catalog-genres-list";
import withActiveFilm from "~/hocs/with-active-film/with-active-film";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import MovieCardInfo from "~/components/movie-card-info/movie-card-info";

const MoviesListWrap = withActiveFilm(MoviesList);

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
          <MoviesListWrap/>
        </section>
        <Footer/>
      </div>
    </>;
  }
}

export default PageWelcome;
