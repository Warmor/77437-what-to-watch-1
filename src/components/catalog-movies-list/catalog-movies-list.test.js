import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import {CatalogMoviesList} from "~/components/catalog-movies-list/catalog-movies-list";

describe(`<CatalogMoviesList/>`, () => {
  it(`CatalogMoviesList renders correctly`, () => {
    const mockProps = {
      films: [{
        id: 1,
        title: `Fantastic Beasts`,
        genreId: 1,
        image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }],
      onArticleTitleClick: jest.fn(),
    };
    const tree = shallow(<CatalogMoviesList
      films={mockProps.films}
      onArticleTitleClick={mockProps.onArticleTitleClick}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});

