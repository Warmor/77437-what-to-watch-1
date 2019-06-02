import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});

import PageWelcome from "~/components/page-welcome/page-welcome";

describe(`<PageWelcome/>`, () => {
  it(`PageWelcome renders correctly`, () => {
    const tree = shallow(<PageWelcome onArticleTitleClick={jest.fn()}/>);
    expect(shallowToJson(tree)).toMatchSnapshot();
  });
});
