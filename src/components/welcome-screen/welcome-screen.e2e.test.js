import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "~/reducer";
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";


Enzyme.configure({adapter: new Adapter()});
const store = createStore(reducer);

describe(`<WelcomeScreen/>`, () => {
  it(`WelcomeScreen correctly click article title`, () => {
    const clickHandler = jest.fn();
    const app = mount(<Provider store={store}>
      <WelcomeScreen onArticleTitleClick={clickHandler}/>
    </Provider>);
    const articleTitle = app.find(`.small-movie-card__link`).at(0);
    articleTitle.simulate(`click`, {preventDefault() {}});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});

