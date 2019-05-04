import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "~/components/app/app";

Enzyme.configure({adapter: new Adapter()});

describe(`<App/>`, () => {
  it(`App correctly click???`, () => {
    const clickHandler = jest.fn();
    shallow(<App onClick={clickHandler}/>);
    // const startButton = app.find(`button`);
    // startButton.simulate(`click`, {preventDefault() {}});
    // expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
