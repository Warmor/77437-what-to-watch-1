import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from "~/components/small-movie-card/small-movie-card";


Enzyme.configure({adapter: new Adapter()});

describe(`<SmallMovieCard/>`, () => {
  const film = {
    id: 1,
    title: `Fantastic Beasts`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  };

  it(`SmallMovieCard correctly eval callback mouseEnter`, () => {
    const mouseEnterHandler = jest.fn();
    const smallMovieCard = mount(<SmallMovieCard film={film} onMouseEnterCard={mouseEnterHandler}/>);
    const article = smallMovieCard.find(`.small-movie-card.catalog__movies-card`);
    article.simulate(`mouseEnter`, {preventDefault() {}});
    expect(mouseEnterHandler).toHaveBeenCalledTimes(1);
  });

  it(`SmallMovieCard correctly eval callback mouseLeave`, () => {
    const mouseLeaveHandler = jest.fn();
    const smallMovieCard = mount(<SmallMovieCard film={film} onMouseLeaveCard={mouseLeaveHandler}/>);
    const article = smallMovieCard.find(`.small-movie-card.catalog__movies-card`);
    article.simulate(`mouseLeave`, {preventDefault() {}});
    expect(mouseLeaveHandler).toHaveBeenCalledTimes(1);
  });

});
