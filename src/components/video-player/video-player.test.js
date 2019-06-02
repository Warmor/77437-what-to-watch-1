import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import VideoPlayer from "~/components/video-player/video-player.jsx";

describe(`<VideoPlayer/>`, () => {
  it(`WelcomeScreen renders correctly`, () => {
    const mock = {
      src: `src:path`,
      poster: `poster:path`,
    };
    const tree = shallow(<VideoPlayer src={mock.src} poster={mock.poster} muted controls/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
