import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import VideoPlayer from "~/components/video-player/video-player.jsx";

describe(`<VideoPlayer/>`, () => {
  it(`WelcomeScreen renders correctly`, () => {
    const film = {
      id: 1,
      title: `Fantastic Beasts`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    };
    const tree = shallow(<VideoPlayer film={film} muted controls/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
