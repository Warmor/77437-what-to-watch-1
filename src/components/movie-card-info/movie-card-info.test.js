import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
import {MovieCardInfo} from "~/components/movie-card-info/movie-card-info";

Enzyme.configure({adapter: new Adapter()});

describe(`<MovieCardInfo/>`, () => {
  it(`MovieCardInfo renders correctly`, () => {
    const mockProps = {
      film: {
        id: 1,
        title: `Fantastic Beasts`,
        genreId: 1,
        image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      },
      favoriteIdList: [1]
    };
    const tree = shallow(<MovieCardInfo film={mockProps.film} favoriteIdList={mockProps.favoriteIdList}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
