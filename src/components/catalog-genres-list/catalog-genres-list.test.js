import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import {CatalogGenresList} from "~/components/catalog-genres-list/catalog-genres-list.jsx";

describe(`<CatalogGenresList/>`, () => {
  it(`CatalogGenresList renders correctly`, () => {
    const mockProps = {
      activeGenre: `Comedies`,
      genres: [`Comedies`],
      onGenreLinkClick: jest.fn(),
    };
    const tree = shallow(<CatalogGenresList
      activeGenre={mockProps.activeGenre}
      genres={mockProps.genres}
      onGenreLinkClick={mockProps.onGenreLinkClick}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
