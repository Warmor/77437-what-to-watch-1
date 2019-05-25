import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import SmallMovieCard from "~/components/small-movie-card/small-movie-card";

describe(`<SmallMovieCard/>`, () => {
  it(`SmallMovieCard renders correctly`, () => {
    const film = {
      id: 1,
      title: `Fantastic Beasts`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    };
    const onArticleTitleClick = jest.fn();
    const onPlayBtnClick = jest.fn();
    const tree = shallow(<SmallMovieCard film={film} onArticleTitleClick={onArticleTitleClick} onPlayBtnClick={onPlayBtnClick}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});

