import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import {PageWelcome} from "~/components/page-welcome/page-welcome";

describe(`<PageWelcome/>`, () => {
  it(`PageWelcome renders correctly`, () => {
    const mockProps = {
      films: [{
        id: 1,
        title: `Fantastic Beasts`,
        genreId: 1,
        image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }],
      activeGenre: `Comedies`,
      genres: [`Comedies`],
      setActiveGenre: jest.fn(),
      loadFilmsAndGenre: jest.fn(),
    };
    const tree = shallow(<PageWelcome
      films={mockProps.films}
      genres={mockProps.genres}
      activeGenre={mockProps.activeGenre}
      setActiveGenre={mockProps.setActiveGenre}
      loadFilmsAndGenre={mockProps.loadFilmsAndGenre}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
