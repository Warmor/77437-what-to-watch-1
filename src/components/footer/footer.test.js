import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
import Footer from "~/components/footer/footer";

Enzyme.configure({adapter: new Adapter()});

describe(`<Footer/>`, () => {
  it(`Footer renders correctly`, () => {
    const tree = shallow(<Footer/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
