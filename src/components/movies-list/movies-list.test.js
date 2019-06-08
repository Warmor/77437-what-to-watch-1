import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import {MoviesList} from "~/components/movies-list/movies-list";

describe(`<MoviesList/>`, () => {
  it(`MoviesList renders correctly`, () => {
    const mockProps = {
      films: [{
        id: 1,
        title: `Fantastic Beasts`,
        genreId: 1,
        image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }],
    };
    const tree = shallow(<MoviesList films={mockProps.films}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});

