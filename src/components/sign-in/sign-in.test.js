import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});
import {SignIn} from "~/components/sign-in/sign-in";

describe(`<SignIn/>`, () => {
  it(`SignIn renders correctly`, () => {
    const tree = shallow(<SignIn login={jest.fn}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
