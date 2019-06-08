import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import {PageMyList} from "~/components/page-my-list/page-my-list";

describe(`<PageMyList/>`, () => {
  it(`PageMyList renders correctly`, () => {
    const mockProps = {
      favorite: [{
        id: 1,
        title: `Fantastic Beasts`,
        genreId: 1,
        image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      }],
      loadFavorite: jest.fn()
    };
    const tree = shallow(<PageMyList
      favorite={mockProps.favorite}
      loadFavorite={mockProps.loadFavorite}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
