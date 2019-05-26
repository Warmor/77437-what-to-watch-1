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

});
