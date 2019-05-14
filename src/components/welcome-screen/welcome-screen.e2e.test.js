import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";

Enzyme.configure({adapter: new Adapter()});

describe(`<WelcomeScreen/>`, () => {
  const filmsList = [{
    id: 1,
    title: `Fantastic Beasts`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  }];
  it(`WelcomeScreen correctly click article title`, () => {
    const clickHandler = jest.fn();
    const app = mount(<WelcomeScreen filmsList={filmsList} onArticleTitleClick={clickHandler}/>);
    const articleTitle = app.find(`.small-movie-card__link`);
    articleTitle.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});

