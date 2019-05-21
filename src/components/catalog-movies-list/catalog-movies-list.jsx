import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

export default class CatalogMoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilm: null,
    };
  }
  _onMouseEnterCard(film) {
    this.setState({
      activeFilm: film,
    });
  }
  _onMouseLeaveCard() {
    this.setState({
      activeFilm: null,
    });
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.props.filmsList.map((film) => {
          return <SmallMovieCard
            key={film.id}
            film={film}
            onArticleTitleClick={this.props.onArticleTitleClick}
            onMouseEnterCard={() => this._onMouseEnterCard(film)}
            onMouseLeaveCard={() => this._onMouseLeaveCard()}
          />;
        })}
      </div>
    );
  }
}

CatalogMoviesList.propTypes = {
  filmsList: PropTypes.array.isRequired,
  onArticleTitleClick: PropTypes.func,
};
