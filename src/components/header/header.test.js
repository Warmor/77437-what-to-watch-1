import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
import {Header} from "~/components/header/header";

Enzyme.configure({adapter: new Adapter()});

describe(`<Header/>`, () => {
  it(`Header renders correctly`, () => {
    const tree = shallow(<Header/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
