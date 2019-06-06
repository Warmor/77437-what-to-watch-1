import React from 'react';
import PageWelcome from "~/components/page-welcome/page-welcome";
import {Switch, Route} from "react-router-dom";
import PageSignIn from "~/components/page-sign-in/page-sign-in.jsx";
import PageMyList from "~/components/page-my-list/page-my-list";
import WithAuthRoute from "~/hocs/with-auth-route/with-auth-route";
import WithoutAuthRoute from "~/hocs/without-auth-route/without-auth-route";

class App extends React.PureComponent {
  render() {
    return <>
    <Switch>
      <Route exact path="/" component={PageWelcome}/>
      <WithAuthRoute path="/my-list" component={PageMyList}/>
      <WithoutAuthRoute exact path="/login" component={PageSignIn}/>
    </Switch>
    </>;
  }
}

export default App;

