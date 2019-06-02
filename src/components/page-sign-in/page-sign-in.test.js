import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
import PageSignIn from "~/components/page-sign-in/page-sign-in";

Enzyme.configure({adapter: new Adapter()});

describe(`<PageSignIn/>`, () => {
  it(`PageSignIn renders correctly`, () => {
    const tree = shallow(<PageSignIn/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
