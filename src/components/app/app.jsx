import React from 'react';
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";

class App extends React.PureComponent {
  render() {
    const onArticleTitleClick = function (e) {
      e.preventDefault();
    };
    return <WelcomeScreen onArticleTitleClick={onArticleTitleClick}/>;
  }
}

export default App;
