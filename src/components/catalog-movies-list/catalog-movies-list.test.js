import React from 'react';
import renderer from 'react-test-renderer';
import CatalogMoviesList from "~/components/catalog-movies-list/catalog-movies-list";

describe(`<CatalogMoviesList/>`, () => {
  it(`CatalogMoviesList renders correctly`, () => {
    const tree = renderer
      .create(<CatalogMoviesList filmsList={[]} onArticleTitleClick={jest.fn()}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

