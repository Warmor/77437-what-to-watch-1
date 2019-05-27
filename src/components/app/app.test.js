import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import App from "~/components/app/app";

describe(`<App/>`, () => {
  it(`App renders correctly`, () => {
    const tree = shallow(<App/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
