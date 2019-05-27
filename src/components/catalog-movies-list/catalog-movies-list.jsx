import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';
import {connect} from "react-redux";

class CatalogMoviesList extends React.PureComponent {
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
        {this.props.films.map((film) => {
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
  onArticleTitleClick: PropTypes.func,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  films: state.films,
});

const mapDispatchToProps = () => ({});

export {CatalogMoviesList};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogMoviesList);
