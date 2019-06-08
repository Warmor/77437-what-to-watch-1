import React from 'react';
import PropTypes from 'prop-types';

function GenresList(props) {
  return <>
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <ul className="catalog__genres-list">
      <li className={[`catalog__genres-item`, props.activeGenre === `` ? `catalog__genres-item--active` : ``].join(` `)}>
        <a href="#" className="catalog__genres-link" onClick={($event) => {
          $event.preventDefault();
          props.onGenreLinkClick(``);
        }}>All genres</a>
      </li>
      {props.genres.map((genre) => {
        return (
          <li className={[`catalog__genres-item`, genre === props.activeGenre ? `catalog__genres-item--active` : ``].join(` `)} key={`genre_title${genre}`}>
            <a href="#" className="catalog__genres-link" onClick={($event) => {
              $event.preventDefault();
              props.onGenreLinkClick(genre);
            }}>{genre}</a>
          </li>
        );
      })}
    </ul>
  </>;
}

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};


export default GenresList;
