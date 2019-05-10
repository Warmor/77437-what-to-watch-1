import React from 'react';
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";
import {filmsList} from "~/mocks/films";

class App extends React.PureComponent {
  render() {
    const onArticleTitleClick = function (e) {
      e.preventDefault();
    };
    return <WelcomeScreen filmsList={filmsList}
      onArticleTitleClick={onArticleTitleClick}/>;
  }
}

export default App;
