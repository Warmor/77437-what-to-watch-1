import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CatalogMoviesList} from "~/components/catalog-movies-list/catalog-movies-list";

Enzyme.configure({adapter: new Adapter()});

describe(`<CatalogMoviesList/>`, () => {
  const filmsList = [{
    id: 1,
    title: `Fantastic Beasts`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }];

  it(`CatalogMoviesList correctly click article title`, () => {
    const clickHandler = jest.fn();
    const tree = mount(<CatalogMoviesList films={filmsList} onArticleTitleClick={clickHandler}/>);
    const articleTitle = tree.find(`.small-movie-card__link`);
    articleTitle.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`CatalogMoviesList correctly set state.activeFilm`, () => {
    const tree = mount(<CatalogMoviesList films={filmsList}/>);
    const moviesCard = tree.find(`.small-movie-card.catalog__movies-card`);
    moviesCard.simulate(`mouseEnter`);
    expect(tree.state(`activeFilm`)).toEqual(filmsList[0]);
  });

  it(`CatalogMoviesList correctly remove state.activeFilm`, () => {
    const tree = mount(<CatalogMoviesList films={filmsList}/>);
    const moviesCard = tree.find(`.small-movie-card.catalog__movies-card`);
    moviesCard.simulate(`mouseLeave`);
    expect(tree.state(`activeFilm`)).toEqual(null);
  });

});
