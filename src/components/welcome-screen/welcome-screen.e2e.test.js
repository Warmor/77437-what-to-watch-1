import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "~/reducer/reducer";
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";


Enzyme.configure({adapter: new Adapter()});
const store = createStore(reducer);

describe(`<WelcomeScreen/>`, () => {
  it(`WelcomeScreen correctly render`, () => {
    const clickHandler = jest.fn();
    mount(<Provider store={store}>
      <WelcomeScreen onArticleTitleClick={clickHandler}/>
    </Provider>);
  });
});

