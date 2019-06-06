import React from 'react';
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import SignIn from "~/components/sign-in/sign-in";

class PageSignIn extends React.PureComponent {
  render() {
    return <>
      <div className="user-page">
        <Header headerTitle={`Sign in`}/>
        <SignIn/>
        <Footer/>
      </div>
    </>;
  }
}

export default PageSignIn;
