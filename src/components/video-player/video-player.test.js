import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from "~/components/video-player/video-player.jsx";

describe(`<VideoPlayer/>`, () => {
  it(`WelcomeScreen renders correctly`, () => {
    const film = {
      id: 1,
      title: `Fantastic Beasts`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    };
    const tree = renderer
      .create(<VideoPlayer film={film} muted controls/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
