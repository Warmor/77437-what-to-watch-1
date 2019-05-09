import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";

describe(`<WelcomeScreen/>`, () => {
  it(`WelcomeScreen renders correctly`, () => {
    const tree = renderer
      .create(<WelcomeScreen filmsList={[]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

