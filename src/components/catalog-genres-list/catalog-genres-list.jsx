import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {getGenres} from "~/reducer/data/selectors";
import {getActiveGenre} from "~/reducer/catalog/selectors";

import {ActionCreator} from "~/reducer/catalog/catalog";

function CatalogGenresList(props) {
  return <>
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <ul className="catalog__genres-list">
      <li className={[`catalog__genres-item`, props.activeGenre === `` ? `catalog__genres-item--active` : ``].join(` `)}>
        <a href="#" className="catalog__genres-link" onClick={() => props.onGenreLinkClick(``)}>All genres</a>
      </li>
      {props.genres.map((genre) => {
        return (
          <li className={[`catalog__genres-item`, genre === props.activeGenre ? `catalog__genres-item--active` : ``].join(` `)} key={`genre_title${genre}`}>
            <a href="#" className="catalog__genres-link" onClick={() => props.onGenreLinkClick(genre)}>{genre}</a>
          </li>
        );
      })}
    </ul>
  </>;
}

CatalogGenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  activeGenre: getActiveGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick: (genre) => dispatch(ActionCreator.setActiveGenre(genre))
});

export {CatalogGenresList};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogGenresList);
