import React from 'react';
import PageWelcome from "~/components/page-welcome/page-welcome";

class App extends React.PureComponent {
  render() {
    const onArticleTitleClick = function (e) {
      e.preventDefault();
    };
    return <PageWelcome onArticleTitleClick={onArticleTitleClick}/>;
  }
}

export default App;
