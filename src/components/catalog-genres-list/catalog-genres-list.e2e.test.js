import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CatalogGenresList} from "~/components/catalog-genres-list/catalog-genres-list";

Enzyme.configure({adapter: new Adapter()});

describe(`<CatalogGenresList/>`, () => {
  it(`CatalogGenresList correctly click catalog__genres-link`, () => {
    const mockProps = {
      currentGenreId: 1,
      genres: [{
        id: 1,
        title: `Comedies`,
      }],
      onGenreLinkClick: jest.fn(),
    };
    const tree = shallow(<CatalogGenresList
      currentGenreId={mockProps.currentGenreId}
      genres={mockProps.genres}
      onGenreLinkClick={mockProps.onGenreLinkClick}/>);
    const genresLink = tree.find(`.catalog__genres-link`).at(0);
    genresLink.simulate(`click`, {preventDefault() {}});
    expect(mockProps.onGenreLinkClick).toHaveBeenCalledTimes(1);
  });
});
