import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmById} from "~/reducer/films/selectors";
import Header from "~/components/header/header";
import ReviewForm from "~/components/review-form/review-form";

class PageFilmReview extends React.PureComponent {
  render() {
    return <>
      <div className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={this.props.film && this.props.film.backgroundImage} alt={this.props.film && this.props.film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header withAuth/>
          <div className="movie-card__poster movie-card__poster--small">
            <img src={this.props.film.posterImage} alt={this.props.film.name} width="218" height="327"/>
          </div>
        </div>
        <ReviewForm/>
      </div>
    </>;
  }
}
PageFilmReview.propTypes = {
  film: PropTypes.object.isRequired,

};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  film: getFilmById(state, ownProps.match.params.id),
});

export {PageFilmReview};

export default connect(mapStateToProps)(PageFilmReview);
