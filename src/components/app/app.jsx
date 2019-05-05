import React from 'react';
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";
import {filmsList} from "~/mocks";

class App extends React.Component {
  render() {
    const onArticleTitleClick = function (e) {
      e.preventDefault();
    };
    const onPlayBtnClick = function (e) {
      e.preventDefault();
    };
    return <WelcomeScreen
      filmsList={filmsList}
      onPlayBtnClick={onPlayBtnClick}
      onArticleTitleClick={onArticleTitleClick}/>;
  }
}

export default App;
