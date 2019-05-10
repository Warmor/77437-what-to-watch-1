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
  _onPlayBtnClick(film) {
    this.setState({
      activeFilm: film,
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
            onPlayBtnClick={() => this._onPlayBtnClick(film)}/>;
        })}
      </div>
    );
  }
}

CatalogMoviesList.propTypes = {
  filmsList: PropTypes.array.isRequired,
  onArticleTitleClick: PropTypes.func,
};
