import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from '~/reducer';

class CatalogGenresList extends React.PureComponent {
  render() {
    return <>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className={[`catalog__genres-item`, this.props.currentGenreId === 0 ? `catalog__genres-item--active` : ``].join(` `)}>
          <a href="#" className="catalog__genres-link" onClick={() => this.props.onGenreLinkClick(0)}>All genres</a>
        </li>
        {this.props.genres.map((genre) => {
          return (
            <li className={[`catalog__genres-item`, genre.id === this.props.currentGenreId ? `catalog__genres-item--active` : ``].join(` `)} key={genre.id}>
              <a href="#" className="catalog__genres-link" onClick={() => this.props.onGenreLinkClick(genre.id)}>{genre.title}</a>
            </li>
          );
        })}
      </ul>
    </>;
  }
}

CatalogGenresList.propTypes = {
  currentGenreId: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object),
  onGenreLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  currentGenreId: state.currentGenreId,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (genreId) => dispatch(ActionCreator[`SET_CURRENT_GENRE_ID`](genreId))
});

export {CatalogGenresList};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogGenresList);

