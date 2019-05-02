import React from 'react';
import WelcomeScreen from "~/components/welcome-screen/welcome-screen";

class App extends React.Component {
  render() {
    const filmsList = [{
      id: 1,
      title: `Fantastic Beasts`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    }, {
      id: 2,
      title: `Bohemian Rhapsody`,
      image: `img/bohemian-rhapsody.jpg`
    }, {
      id: 3,
      title: `Macbeth`,
      image: `img/macbeth.jpg`
    }];
    return <WelcomeScreen filmsList={filmsList}/>;
  }
}

export default App;
