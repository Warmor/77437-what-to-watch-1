import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";

Enzyme.configure({adapter: new Adapter()});

describe(`<WelcomeScreen/>`, () => {
  it(`WelcomeScreen correctly click article title`, () => {
    const clickHandler = jest.fn();
    const filmsList = [{
      id: 1,
      title: `Fantastic Beasts`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }];
    const app = shallow(<WelcomeScreen filmsList={filmsList} onArticleTitleClick={clickHandler}/>);
    const articleTitle = app.find(`.small-movie-card__link`);
    articleTitle.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
  it(`WelcomeScreen correctly click play btn`, () => {
    const clickHandler = jest.fn();
    const filmsList = [{
      id: 1,
      title: `Fantastic Beasts`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }];
    const app = shallow(<WelcomeScreen filmsList={filmsList} onPlayBtnClick={clickHandler}/>);
    const articleTitle = app.find(`.small-movie-card__play-btn`);
    articleTitle.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

});

