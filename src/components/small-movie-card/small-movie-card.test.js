import React from 'react';
import renderer from 'react-test-renderer';
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
    const tree = renderer
      .create(<SmallMovieCard film={film} onArticleTitleClick={onArticleTitleClick} onPlayBtnClick={onPlayBtnClick}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

