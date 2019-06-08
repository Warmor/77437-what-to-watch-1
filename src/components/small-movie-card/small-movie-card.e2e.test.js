import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from "~/components/small-movie-card/small-movie-card";


Enzyme.configure({adapter: new Adapter()});

describe(`<SmallMovieCard/>`, () => {
  jest.useFakeTimers();
  const film = {
    id: 1,
    title: `Fantastic Beasts`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  };

  it(`SmallMovieCard correctly eval callback setActiveFilm`, () => {
    const setActiveFilmHandler = jest.fn();
    const smallMovieCard = mount(<SmallMovieCard film={film} isActive={false} setActiveFilm={setActiveFilmHandler}/>);
    const article = smallMovieCard.find(`.small-movie-card.catalog__movies-card`);
    article.simulate(`mouseEnter`, {preventDefault() {}});
    jest.runAllTimers();
    expect(setActiveFilmHandler).toHaveBeenCalledTimes(1);
  });

  it(`SmallMovieCard correctly eval callback removeActiveFilm`, () => {
    const removeActiveFilmHandler = jest.fn();
    const smallMovieCard = mount(<SmallMovieCard film={film} isActive={false} removeActiveFilm={removeActiveFilmHandler}/>);
    const article = smallMovieCard.find(`.small-movie-card.catalog__movies-card`);
    article.simulate(`mouseLeave`, {preventDefault() {}});
    expect(removeActiveFilmHandler).toHaveBeenCalledTimes(1);
  });

});
