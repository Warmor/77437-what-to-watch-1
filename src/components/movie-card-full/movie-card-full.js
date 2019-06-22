import React from 'react';
import PropTypes from "prop-types";
import {Switch} from "react-router-dom";
import {Link, NavLink} from "react-router-dom";
import MovieCardFullDetails from "~/components/movie-card-full-details/movie-card-full-details";
import MovieCardFullOverview from "~/components/movie-card-full-overview/movie-card-full-overview";
import MovieCardFullReviews from "~/components/movie-card-full-reviews/movie-card-full-reviews";
import WithPropsRoute from "~/hocs/with-props-route/with-props-route";


function MovieCardFull(props) {
  const {film} = props;
  return <>
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className="movie-nav__item">
                <NavLink exact to={`/film/${film.id}`} className="movie-nav__link" activeClassName="movie-nav__link--active">Overview</NavLink>
              </li>
              <li className="movie-nav__item">
                <NavLink to={`/film/${film.id}/details`} className="movie-nav__link" activeClassName="movie-nav__link--active">Details</NavLink>
              </li>
              <li className="movie-nav__item">
                <NavLink to={`/film/${film.id}/reviews`} className="movie-nav__link" activeClassName="movie-nav__link--active">Reviews</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <WithPropsRoute exact path={`/film/${film.id}`} component={MovieCardFullOverview} film={film}/>
            <WithPropsRoute exact path={`/film/${film.id}/details`} component={MovieCardFullDetails} film={film}/>
            <WithPropsRoute exact path={`/film/${film.id}/reviews`} component={MovieCardFullReviews} film={film}/>
          </Switch>
        </div>
      </div>
    </div>
  </>;
}

MovieCardFull.propTypes = {
  film: PropTypes.object.isRequired,
};

export default MovieCardFull;
