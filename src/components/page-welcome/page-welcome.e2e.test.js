import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "~/reducer/reducer";
import PageWelcome from "~/components/page-welcome/page-welcome";


Enzyme.configure({adapter: new Adapter()});
const store = createStore(reducer);

describe(`<PageWelcome/>`, () => {
  it(`PageWelcome correctly render`, () => {
    const clickHandler = jest.fn();
    mount(<Provider store={store}>
      <PageWelcome onArticleTitleClick={clickHandler}/>
    </Provider>);
  });
});

