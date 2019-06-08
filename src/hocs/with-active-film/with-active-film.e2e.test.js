import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveFilm from '~/hocs/with-active-film/with-active-film';

Enzyme.configure({adapter: new Adapter()});

const WithActiveFilmWrapper = withActiveFilm(() => (<div/>));

describe(`<withActiveFilm/>`, () => {
  it(`Should default state isActive === false`, () => {
    const tree = mount(<WithActiveFilmWrapper/>);
    expect(tree.state(`isActive`)).toEqual(false);
  });
});
